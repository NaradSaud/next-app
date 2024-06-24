"use client"
// pages/services.js
import Link from 'next/link';

const services = [
  {
    title: 'Nutritional Counseling',
    description: 'Get personalized nutrition plans to improve your health and well-being.',
    link: '/services/nutritional-counseling',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Fitness Training',
    description: 'Join our fitness programs to stay fit and healthy.',
    link: '/services/fitness-training',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Mental Health Support',
    description: 'Access mental health resources and support.',
    link: '/services/mental-health-support',
    image: 'https://via.placeholder.com/150'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-center text-black">Our Services</h1>
          <p className="text-lg text-gray-700 mb-4 text-center">
            Explore our range of health services designed to help you live a healthier life.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <img src={service.image} alt={service.title} className="w-full h-32 object-cover rounded-t-lg mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-black">{service.title}</h2>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <div className="flex justify-center">
                <Link href={service.link}>
                  <span className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Services;
