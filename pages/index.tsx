import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const [form, setForm] = useState<LoginForm>({ email: '', password: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message); // Display message
    } catch (error) {
      console.error('Login failed:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-[#e7f0fd]">
        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-[#153a78] text-white p-10 space-y-8">
          <h1 className="text-3xl font-bold">Welcome Back, Doctor!</h1>
          <p className="text-lg italic">"The art of medicine consists of amusing the patient while nature cures the disease."</p>
          <p className="text-lg italic">"Wherever the art of Medicine is loved, there is also a love of Humanity."</p>
          <p className="text-lg italic">"Saving lives is not a job, it's a passion."</p>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center w-full md:w-1/2 p-6">
          <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-[#153a78]">
              Doctor's Login
            </h2>

            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />

              <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
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
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
