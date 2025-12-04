import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Registration Successful!");
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-12 bg-gray-50">

      <div className="bg-white shadow-lg p-10 rounded-lg max-w-md w-full">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center mb-6">Create an Account</h1>
        <p className="text-gray-600 text-center mb-8">
          Join our training community and start learning!
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* FULL NAME */}
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full border rounded-md px-4 py-2"
              placeholder="Enter your full name"
              required
              onChange={handleChange}
            />
          </div>

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

          {/* CONFIRM PASSWORD */}
          <div>
            <label className="block font-semibold mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full border rounded-md px-4 py-2"
              placeholder="Re-enter password"
              required
              onChange={handleChange}
            />
          </div>

          {/* REGISTER BUTTON */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition"
          >
            Register
          </button>
        </form>

        {/* LOGIN LINK */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-semibold hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}
