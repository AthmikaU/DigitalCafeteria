import React, { useState } from 'react';
import axios from '../axiosConfig';

const AdminDashboard = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [users, setUsers] = useState([]); // to store fetched users

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

  // Fetch users on button click
  const fetchUsers = async () => {
    try {
      const res = await axios.get('/users');
      setUsers(res.data);
    } catch (err) {
      setMsg('Error fetching users');
    }
  };

  return (
    <div className="container mt-5">
      {/* Page Header */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Admin Dashboard</h2>
        <p className="text-muted">Manage users and cafeteria menu from here</p>
      </div>

      {/* User Registration */}
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-header bg-primary text-white fw-bold">
              Register Student/Faculty
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">User ID</label>
                  <input
                    className="form-control"
                    placeholder="Enter User ID"
                    value={userId}
                    onChange={e => setUserId(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Password</label>
                  <input
                    className="form-control"
                    placeholder="Enter Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button className="btn btn-success w-100">
                  Register User
                </button>
              </form>

              {msg && (
                <div
                  className={`alert mt-3 ${
                    msg.includes('successfully')
                      ? 'alert-success'
                      : 'alert-danger'
                  }`}
                >
                  {msg}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fetch Registered Users */}
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-secondary text-white fw-bold">
              View Registered Users
            </div>
            <div className="card-body p-4">
              <button
                className="btn btn-primary w-100 mb-3"
                onClick={fetchUsers}
              >
                Show Regestered UserIDs
              </button>

              {users.length > 0 ? (
                <ul className="list-group">
                  {users.map((user, index) => (
                    <li key={index} className="list-group-item">
                      {user.id}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted">No users fetched yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
