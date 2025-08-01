import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function RegisterSuccess() {
  const router = useRouter();
  const { name, email, mobile, specialization } = router.query;

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/'); // 👈 Redirect to sign-in or home page
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Registration Successful!</h2>
          <p className="text-gray-700">Your details have been saved successfully.</p>

          <div className="mt-6 text-left text-sm text-gray-800 space-y-2">
            <p><span className="font-semibold">Name:</span> {name}</p>
            <p><span className="font-semibold">Email:</span> {email}</p>
            <p><span className="font-semibold">Mobile:</span> {mobile}</p>
            <p><span className="font-semibold">Specialization:</span> {specialization}</p>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            You will be redirected to the Sign-In page in 5 seconds...
          </p>
        </div>
      </div>
    </>
  );
}
