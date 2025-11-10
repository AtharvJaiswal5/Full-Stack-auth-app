import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { signup } = useContext(AuthContext);
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(form);
      alert("Signup successful!");
      nav("/home");
    } catch (err) {
      console.error("Signup failed:", err);
      alert("Signup failed! Try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Your Account 🎨</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account?{" "}
        <Link to="/login" style={{ color: "#007bff", textDecoration: "none" }}>
          Login here
        </Link>
      </p>
    </div>
  );
}
