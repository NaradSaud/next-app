// pages/about.js

import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-center text-black">About Health Corner</h1>
          <p className="text-lg text-gray-700 mb-4 text-center">
            Welcome to Health Corner, your go-to resource for natural remedies and health tips.
          </p>
          <div className="flex justify-center">
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At Health Corner, we aim to empower individuals to take charge of their health through
            the use of natural remedies and holistic health practices. Our mission is to provide
            reliable, well-researched information to help you lead a healthier, more balanced life.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Detailed articles on a variety of natural remedies</li>
            <li>Health tips and advice for everyday well-being</li>
            <li>Step-by-step guides for preparing home remedies</li>
            <li>Expert opinions and interviews with health professionals</li>
            <li>A community of like-minded individuals sharing their experiences</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">Our Team</h2>
          <p className="text-gray-700 mb-4">
            Our team is composed of health enthusiasts, researchers, and writers who are passionate
            about natural health. We are dedicated to bringing you accurate and up-to-date
            information on various health topics.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            We love hearing from our readers! If you have any questions, suggestions, or feedback,
            please feel free to reach out to us at <a href="mailto:info@healthcorner.com" className="text-blue-500 hover:underline">info@healthcorner.com</a>.
          </p>
        </section>

        <section className="flex justify-center">
          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
              Back to Home
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default About;
