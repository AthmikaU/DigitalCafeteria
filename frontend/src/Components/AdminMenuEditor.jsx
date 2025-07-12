// src/Components/AdminMenuEditor.jsx
import React, { useEffect, useState, useCallback } from 'react';
import axios from '../axiosConfig';

const categories = ['North Indian', 'South Indian', 'Snacks', 'Juices & Milkshakes'];

const AdminMenuEditor = () => {
  const [menu, setMenu] = useState([]);
  const [formData, setFormData] = useState({ name: '', description: '', price: '', category: categories[0] });
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState('');

  // useCallback ensures stable function reference
  const fetchMenu = useCallback(async () => {
    // const url = filter ? `/menu?category=${filter}` : '/menu';
    const url = filter ? `/menu?category=${encodeURIComponent(filter)}` : '/menu';
    const res = await axios.get(url);
    setMenu(res.data);
  }, [filter]);

  useEffect(() => {
    fetchMenu();
  }, [fetchMenu]); // ✅ ESLint happy now

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`/menu/${editingId}`, formData);
    } else {
      await axios.post('/menu', formData);
    }
    setFormData({ name: '', description: '', price: '', category: categories[0] });
    setEditingId(null);
    fetchMenu();
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditingId(item._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this item?')) {
      await axios.delete(`/menu/${id}`);
      fetchMenu();
    }
  };

  return (
    <div className="container mt-4">
      <h3>📋 Menu Editor</h3>

      {/* Filter by category */}
      <div className="mb-3">
        <select className="form-select w-50" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-4 row g-2">
        <div className="col-md-3">
          <input name="name" className="form-control" placeholder="Name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="col-md-3">
          <input name="description" className="form-control" placeholder="Description" value={formData.description} onChange={handleChange} />
        </div>
        <div className="col-md-2">
          <input name="price" type="number" className="form-control" placeholder="Price" value={formData.price} onChange={handleChange} required />
        </div>
        <div className="col-md-2">
          <select name="category" className="form-select" value={formData.category} onChange={handleChange}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary w-100">{editingId ? 'Update' : 'Add'}</button>
        </div>
      </form>

      {/* Table of menu items */}
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>₹ Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menu.map(item => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>₹{item.price}</td>
              <td>{item.category}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(item)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMenuEditor;
