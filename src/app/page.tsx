import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gray-100">
      <h1 className="text-4xl font-bold mb-5">Welcome to My Website</h1>
      <p className="text-lg mb-5">Explore the pages using the navigation below.</p>
      <div className="space-x-4">
        <Link href="/about">
          <a className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">About</a>
        </Link>
        <Link href="/contact">
          <a className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;