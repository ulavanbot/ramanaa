import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { SettingsContext } from '../context/SettingsContext';
import dhotiImage from '../assets/dhoti.png'; // default
import shirtImage from '../assets/shirt.png'; // default
import './AdminPage.css';

const AdminPage = () => {
  const { products, addProduct, deleteProduct } = useContext(ProductContext);
  const { settings, updateSettings } = useContext(SettingsContext);
  
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: 'Dhotis',
    imageType: 'dhoti'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.price) return alert("Please fill out title and price");

    const newProduct = {
      title: formData.title,
      price: parseInt(formData.price),
      category: formData.category,
      image: formData.imageType === 'dhoti' ? dhotiImage : shirtImage
    };

    try {
      await addProduct(newProduct);
      // Reset form
      setFormData({ title: '', price: '', category: 'Dhotis', imageType: 'dhoti' });
      alert("Product added successfully!");
    } catch (err) {
      alert("Error adding product! " + err.message);
    }
  };

  const [settingsData, setSettingsData] = useState(settings);

  const handleSettingsChange = (e) => {
    setSettingsData({ ...settingsData, [e.target.name]: e.target.value });
  };

  const handleSettingsSubmit = (e) => {
    e.preventDefault();
    updateSettings(settingsData);
    alert("Store settings updated successfully!");
  };

  return (
    <div className="admin-page section-padding">
      <div className="container">
        <h1 className="section-title">Admin Dashboard</h1>

        {/* Store Settings Form */}
        <div className="admin-card" style={{ marginBottom: '30px' }}>
          <h2>Store Settings (Footer Content)</h2>
          <form onSubmit={handleSettingsSubmit} className="admin-form" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Company Description</label>
              <input 
                type="text" 
                name="description" 
                value={settingsData.description} 
                onChange={handleSettingsChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label>Contact Email</label>
              <input 
                type="email" 
                name="email" 
                value={settingsData.email} 
                onChange={handleSettingsChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label>Contact Phone</label>
              <input 
                type="text" 
                name="phone" 
                value={settingsData.phone} 
                onChange={handleSettingsChange} 
                required 
              />
            </div>

            <div className="form-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
              <button type="submit" className="btn-primary w-100">Save Settings</button>
            </div>
          </form>
        </div>
        
        <div className="admin-grid">
          {/* Add Product Form */}
          <div className="admin-card">
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="form-group">
                <label>Product Title</label>
                <input 
                  type="text" 
                  name="title" 
                  value={formData.title} 
                  onChange={handleChange} 
                  placeholder="e.g. Royal Silk Dhoti" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label>Price (₹)</label>
                <input 
                  type="number" 
                  name="price" 
                  value={formData.price} 
                  onChange={handleChange} 
                  placeholder="e.g. 1500" 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select name="category" value={formData.category} onChange={handleChange}>
                  <option value="Dhotis">Dhotis</option>
                  <option value="Shirts">Shirts</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>

              <div className="form-group">
                <label>Image Type (Demo)</label>
                <select name="imageType" value={formData.imageType} onChange={handleChange}>
                  <option value="dhoti">Dhoti Image</option>
                  <option value="shirt">Shirt Image</option>
                </select>
              </div>

              <button type="submit" className="btn-primary w-100">Add Product</button>
            </form>
          </div>

          {/* Product List */}
          <div className="admin-card">
            <h2>Current Products ({products.length})</h2>
            <div className="product-list-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td>
                        <img src={product.image} alt={product.title} className="admin-table-img" />
                      </td>
                      <td>{product.title}</td>
                      <td>₹{product.price}</td>
                      <td>{product.category}</td>
                      <td>
                        <button onClick={() => deleteProduct(product.id)} className="btn-delete">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
