import Link from 'next/link';
import Image from 'next/image';
import type { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Image src="/cliniq-logo.jpg" alt="Cliniq Logo" width={40} height={40} />
        <div className="text-[#0b2c53] text-xl font-bold">CLINIQ</div>
      </div>

      <div className="space-x-6">
        <Link href="/doctor-list" className="text-gray-700 hover:text-blue-500">Doctor List</Link>
        <Link href="/booking" className="text-gray-700 hover:text-blue-500">Booking</Link>
        <Link href="/appointments" className="text-gray-700 hover:text-blue-500">Appointments</Link>
        <Link href="/profile" className="text-gray-700 hover:text-blue-500">Profile</Link>
        <Link href="/doctor-portal" className="text-gray-700 hover:text-blue-500">Doctor Portal</Link>
      </div>
    </nav>
  );
};

export default Navbar;
