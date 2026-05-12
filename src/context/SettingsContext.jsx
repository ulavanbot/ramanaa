import React, { createContext, useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const SettingsContext = createContext();

const defaultSettings = {
  description: 'Premium traditional wear for the modern man. Owned by A P KARTHIK.',
  email: 'info@ramanaa.com',
  phone: '+91 98765 43210'
};

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(defaultSettings);

  const isFirebaseConfigured = auth.app.options.apiKey !== "YOUR_API_KEY";

  useEffect(() => {
    if (isFirebaseConfigured) {
      const fetchSettings = async () => {
        try {
          const docSnap = await getDoc(doc(db, "store", "settings"));
          if (docSnap.exists()) {
            setSettings(docSnap.data());
          } else {
            // Set default if doesn't exist
            await setDoc(doc(db, "store", "settings"), defaultSettings);
            setSettings(defaultSettings);
          }
        } catch (error) {
          console.error("Error fetching settings:", error);
          fallbackToLocal();
        }
      };
      fetchSettings();
    } else {
      fallbackToLocal();
    }
  }, []);

  const fallbackToLocal = () => {
    const savedSettings = localStorage.getItem('ramanaa_settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    } else {
      setSettings(defaultSettings);
      localStorage.setItem('ramanaa_settings', JSON.stringify(defaultSettings));
    }
  };

  const updateSettings = async (newSettings) => {
    if (isFirebaseConfigured) {
      try {
        await setDoc(doc(db, "store", "settings"), newSettings);
        setSettings(newSettings);
      } catch (error) {
        console.error("Error updating settings:", error);
      }
    } else {
      setSettings(newSettings);
      localStorage.setItem('ramanaa_settings', JSON.stringify(newSettings));
    }
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
