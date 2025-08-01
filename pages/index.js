import { useState } from 'react'; 
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message); // Handle success/failure
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-[#e7f0fd]">
        {/* Left Section - Quote */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-[#153a78] text-white p-10 space-y-8">
          <h1 className="text-3xl font-bold">Welcome Back, Doctor!</h1>
          <p className="text-lg italic">"The art of medicine consists of amusing the patient while nature cures the disease."</p>
          <p className="text-lg italic">"Wherever the art of Medicine is loved, there is also a love of Humanity."</p>
          <p className="text-lg italic">"Saving lives is not a job, it's a passion."</p>
        </div>

        {/* Right Section - Login Form */}
        <div className="flex justify-center items-center w-full md:w-1/2 p-6">
          <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-[#153a78]">
              Doctor's Sign In
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Your password"
                value={form.password}
                onChange={handleChange}
                className="w-full mb-6 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#153a78] hover:bg-blue-800 text-white font-medium py-2 rounded-md transition"
              >
                Login
              </button>
            </form>

            <p className="text-center mt-4 text-sm text-gray-600">
              Don’t have an account?{' '}
              <Link href="/register" className="text-blue-700 font-semibold">
                Then register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
