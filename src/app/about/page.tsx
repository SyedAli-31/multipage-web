import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <section className="text-center p-5">
          <h1 className="text-4xl font-bold mb-5">About Us</h1>
          <p className="text-lg mb-5">This is the About page of our website.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;