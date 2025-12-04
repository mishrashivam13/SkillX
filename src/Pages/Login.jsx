import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-12 bg-gray-50">

      <div className="bg-white shadow-lg p-10 rounded-lg max-w-md w-full">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        <p className="text-gray-600 text-center mb-8">
          Welcome back! Please login to continue.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* EMAIL */}
          <div>
            <label className="block font-semibold mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded-md px-4 py-2"
              placeholder="example@gmail.com"
              required
              onChange={handleChange}
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              className="w-full border rounded-md px-4 py-2"
              placeholder="Enter password"
              required
              onChange={handleChange}
            />
          </div>

          {/* FORGOT PASSWORD */}
          <div className="text-right">
            <button
              type="button"
              className="text-sm text-primary font-semibold hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition"
          >
            Login
          </button>

        </form>

        {/* REGISTER LINK */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-primary font-semibold hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}
