import React, { createContext, useState, useEffect } from 'react';
import { products as initialProducts } from '../data/products';
import { db, auth } from '../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const isFirebaseConfigured = auth.app.options.apiKey !== "YOUR_API_KEY";

  useEffect(() => {
    if (isFirebaseConfigured) {
      // Fetch from Firestore
      const fetchProducts = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "products"));
          const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          if (productsList.length > 0) {
            setProducts(productsList);
          } else {
            setProducts(initialProducts); // Use fallback if empty
          }
        } catch (error) {
          console.error("Error fetching products:", error);
          fallbackToLocal();
        }
      };
      fetchProducts();
    } else {
      fallbackToLocal();
    }
  }, []);

  const fallbackToLocal = () => {
    const savedProducts = localStorage.getItem('ramanaa_products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(initialProducts);
      localStorage.setItem('ramanaa_products', JSON.stringify(initialProducts));
    }
  };

  const addProduct = async (newProduct) => {
    if (isFirebaseConfigured) {
      try {
        const docRef = await addDoc(collection(db, "products"), newProduct);
        setProducts([{ id: docRef.id, ...newProduct }, ...products]);
      } catch (e) {
        console.error("Error adding document: ", e);
        throw e;
      }
    } else {
      const productWithId = { ...newProduct, id: Date.now() };
      const updatedProducts = [productWithId, ...products];
      setProducts(updatedProducts);
      localStorage.setItem('ramanaa_products', JSON.stringify(updatedProducts));
    }
  };

  const deleteProduct = async (id) => {
    if (isFirebaseConfigured) {
      try {
        await deleteDoc(doc(db, "products", id));
        setProducts(products.filter(p => p.id !== id));
      } catch (e) {
        console.error("Error deleting document: ", e);
        throw e;
      }
    } else {
      const updatedProducts = products.filter(p => p.id !== id);
      setProducts(updatedProducts);
      localStorage.setItem('ramanaa_products', JSON.stringify(updatedProducts));
    }
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
