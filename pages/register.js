import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function DoctorRegister() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    specialization: '',
    mobile: '',
    password: '',
    qualification: '',
    experience: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        router.push({
          pathname: '/register-success',
          query: {
            name: form.name,
            email: form.email,
            specialization: form.specialization,
            mobile: form.mobile,
            qualification: form.qualification,
            experience: form.experience,
          },
        });
      } else {
        const data = await res.json();
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('Something went wrong');
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <Image src="/cliniq-logo.jpg" alt="Cliniq Logo" width={40} height={40} />
          <span className="text-xl font-semibold text-blue-900">CLINIQ</span>
        </div>
        <nav className="space-x-6 text-blue-900 font-medium">
          <a href="#" className="hover:underline">Doctor List</a>
          <a href="#" className="hover:underline">Booking</a>
          <a href="#" className="hover:underline">Appointments</a>
          <a href="#" className="hover:underline">Profile</a>
          <a href="#" className="hover:underline">Doctor Portal</a>
        </nav>
      </div>

      {/* Two-column layout */}
      <div className="min-h-screen grid md:grid-cols-2 bg-gradient-to-r from-blue-50 to-blue-100">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center bg-blue-900 text-white px-10">
          <h1 className="text-4xl font-bold mb-4">Join Cliniq</h1>
          <p className="text-lg text-center max-w-md">
            “The good physician treats the disease; the great physician treats the patient who has the disease.”
          </p>
          <Image src="/doctor-illustration.png" alt="Doctor" width={300} height={300} className="mt-6" />
        </div>

        {/* Right Side - Form */}
        <div className="flex items-center justify-center px-4 py-12">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-300"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Create Account</h2>
            {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              required
              className="w-full p-2 mb-3 border border-gray-300 rounded text-blue-900"
            />
            <input
              type="text"
              name="mobile"
              placeholder="Enter your phone"
              onChange={handleChange}
              required
              className="w-full p-2 mb-3 border border-gray-300 rounded text-blue-900"
            />
            <input
              type="text"
              name="specialization"
              placeholder="Enter your specialization"
              onChange={handleChange}
              required
              className="w-full p-2 mb-3 border border-gray-300 rounded text-blue-900"
            />
            <input
              type="text"
              name="qualification"
              placeholder="Enter your qualification (e.g. MBBS, MD)"
              onChange={handleChange}
              required
              className="w-full p-2 mb-3 border border-gray-300 rounded text-blue-900"
            />
            <input
              type="number"
              name="experience"
              placeholder="Years of experience"
              onChange={handleChange}
              required
              min="0"
              className="w-full p-2 mb-3 border border-gray-300 rounded text-blue-900"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
              className="w-full p-2 mb-3 border border-gray-300 rounded text-blue-900"
            />
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              onChange={handleChange}
              required
              className="w-full p-2 mb-4 border border-gray-300 rounded text-blue-900"
            />

            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-950 text-white py-2 w-full rounded"
            >
              Register
            </button>

            <p className="mt-4 text-center text-sm text-gray-700">
              Already have an account?{' '}
              <a href="/login" className="text-blue-900 font-semibold hover:underline">Login</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
