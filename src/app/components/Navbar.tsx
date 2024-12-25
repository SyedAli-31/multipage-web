import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
        <div className="space-x-4">
          <Link href="/"
             className="hover:underline">Home
          </Link>
          <Link href="/about"
            className="hover:underline">About
          </Link>
          <Link href="/contact" className="hover:underline">
          Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;