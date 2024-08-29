import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-blue-600 text-white p-4">
      <div className="flex items-center">
        <FiMenu className="mr-2" />
        <span className="font-bold text-xl">RAIL MADAD</span>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/user"><button className="bg-transparent border border-white px-4 py-1 rounded hover:bg-white hover:text-blue-600 transition">Login</button></Link>
        <Link href="/signup"><button className="bg-transparent border border-white px-4 py-1 rounded hover:bg-white hover:text-blue-600 transition">Sign Up</button></Link>
        <Link href="/admin"><button className="bg-transparent border border-white px-4 py-1 rounded hover:bg-white hover:text-blue-600 transition">Admin Login</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
