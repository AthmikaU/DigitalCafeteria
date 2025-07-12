// src/Components/AdminMenuManager.jsx
import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig'; // axios uses REACT_APP_API_BASE_URL from .env

const AdminMenuManager = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', category: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await axios.get('/menu'); // REACT_APP_API_BASE_URL + /menu
      setItems(res.data);
    } catch (err) {
      console.error('Error fetching menu:', err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`/menu/${editingId}`, form); // REACT_APP_API_BASE_URL + /menu/:id
      } else {
        await axios.post('/menu', form); // REACT_APP_API_BASE_URL + /menu
      }
      setForm({ name: '', price: '', category: '' });
      setEditingId(null);
      fetchMenu();
    } catch (err) {
      console.error('Error saving item:', err);
    }
  };

  const handleEdit = (item) => {
    setForm({ name: item.name, price: item.price, category: item.category });
    setEditingId(item._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/menu/${id}`); // REACT_APP_API_BASE_URL + /menu/:id
      fetchMenu();
    } catch (err) {
      console.error('Error deleting item:', err);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Manage Menu</h3>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Item Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Category"
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100">
            {editingId ? 'Update' : 'Add'}
          </button>
        </div>
      </form>

      <table className="table table-bordered table-hover mt-4">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(item)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMenuManager;
