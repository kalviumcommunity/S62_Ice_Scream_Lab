import React from "react";
import {NavLink} from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Header */}
      <header className="p-6 bg-gray-800 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Ice Scream Lab</h1>
          <nav>
            <a
              href="#features"
              className="text-lg hover:text-gray-400 mx-4 transition"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-lg hover:text-gray-400 mx-4 transition"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-lg hover:text-gray-400 mx-4 transition"
            >
              Contact
            </a>
            <NavLink to="/card" className="text-lg hover:text-gray-400 mx-4 transition">
              Card
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1558961363-fa8e7a39eff6')]">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-6">
            Dare to Taste the Unthinkable!
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join our community to share, explore, and react to the creepiest ice
            cream flavor combinations ever imagined!
          </p>
          <a
            href="#features"
            className="px-6 py-3 bg-purple-600 text-white rounded-md text-lg hover:bg-purple-500 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">User Authentication</h3>
              <p>Secure login and registration system for a personalized experience.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Interactive Feed</h3>
              <p>Post, like, and comment on creepy ice cream combinations!</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Search & Filter</h3>
              <p>Find your favorite flavors using our dynamic search bar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-center mb-10">About Us</h2>
          <p className="text-lg text-gray-300">
            At Ice Scream Lab, we’re passionate about creativity, fun, and
            engagement. This platform is a melting pot of wild ideas and crazy
            flavors, designed to inspire and amuse.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Ice Scream Lab. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
