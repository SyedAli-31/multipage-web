import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <section className="text-center p-5">
          <h1 className="text-4xl font-bold mb-5">Welcome to My Website</h1>
          <p className="text-lg mb-5">Explore the world of responsive design with Tailwind CSS.</p>
          <a
            href="/about"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Learn More
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;