import React, { useState } from 'react';
import axios from '../axiosConfig';
import AdminMenuManager from './AdminMenuManager';
// import AdminMenuEditor from './AdminMenuEditor';

const AdminDashboard = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/register/user', { id: userId, password });
      setMsg('User registered successfully!');
      setUserId('');
      setPassword('');
    } catch (err) {
      setMsg(err.response?.data?.msg || 'Error');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>

      {/* User Registration */}
      <div className="card p-3 mb-4">
        <h4>Register New User</h4>
        <form onSubmit={handleRegister}>
          <input
            className="form-control mb-2"
            placeholder="User ID"
            value={userId}
            onChange={e => setUserId(e.target.value)}
            required
          />
          <input
            className="form-control mb-2"
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button className="btn btn-primary">Register User</button>
        </form>
        {msg && <div className="alert alert-info mt-3">{msg}</div>}
      </div>

      {/* Menu Management */}
      <div className="card p-3 mb-4">
        <h4>Manage Menu</h4>
        <AdminMenuManager />
      </div>

      {/* Menu Editor Section */} 
      {/* <div className="card p-3">
        <h4>Edit Existing Menu Items</h4>
        <AdminMenuEditor />
      </div> */}
    </div>
  );
};

export default AdminDashboard;
