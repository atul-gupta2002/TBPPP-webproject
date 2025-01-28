import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="form-container border shadow p-5 rounded-4 bg-white">
        <h2 className="text-center mb-4 fw-bold">Login</h2>
        <form className="d-flex flex-column">
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              id="email"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              id="password"
            />
          </div>
          <button type="submit" className="btn btn-success w-100 mb-3">
            Login
          </button>
          <div className="text-center">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
