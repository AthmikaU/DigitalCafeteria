import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from '../axiosConfig';
import Logo from '../assets/Images/sahyadriLogo.png';

function Login({ onLogin }) {
  const [role, setRole] = useState('user');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const url = role === 'admin' ? '/login/admin' : '/login/user';
    const payload = role === 'admin'
      ? { username: id, password }
      : { id, password };

    try {
      const res = await axios.post(url, payload);
      onLogin(res.data); // Save user globally
      navigate(res.data.role === 'admin' ? '/admin-dashboard' : '/mainpage');
    } catch (err) {
      alert(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="login-wrapper d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center mb-4">
        <img src={Logo} alt="Sahyadri Logo" style={{ maxHeight: '80px' }} />
        <h2 className="mt-2 fw-bold">Digital Cafeteria</h2>
      </div>

      <div className="login-card p-4 shadow bg-white rounded" style={{ minWidth: '300px' }}>
        <div className="d-flex justify-content-center mb-3">
          <button
            onClick={() => setRole('admin')}
            className={`btn ${role === 'admin' ? 'btn-dark' : 'btn-outline-dark'} mx-1`}
          >
            Admin
          </button>
          <button
            onClick={() => setRole('user')}
            className={`btn ${role === 'user' ? 'btn-dark' : 'btn-outline-dark'} mx-1`}
          >
            Student/Faculty
          </button>
        </div>

        <h5 className="text-center mb-3">{role === 'admin' ? 'Admin Login' : 'Student Login'}</h5>

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Username / ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-success w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
