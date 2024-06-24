"use client"

import { useState } from 'react';
import Link from 'next/link';

const HomePage = () => {
  const [symptom, setSymptom] = useState('');
  const [diseases, setDiseases] = useState([]);

  const handleSymptomChange = (e) => {
    setSymptom(e.target.value);
  };

  const handleSymptomSubmit = (e) => {
    e.preventDefault();
    // Simple symptom to disease mapping for demonstration
    const symptomToDiseaseMap = {
      cough: ['Common Cold', 'Flu', 'COVID-19'],
      headache: ['Migraine', 'Tension Headache', 'Cluster Headache'],
      fever: ['Malaria', 'Dengue', 'COVID-19'],
    };

    const probableDiseases = symptomToDiseaseMap[symptom.toLowerCase()] || ['Unknown symptom'];
    setDiseases(probableDiseases);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-center text-black">Welcome to Health Corner</h1>
          <p className="text-lg text-gray-700 mb-4 text-center">
            Explore natural remedies and health tips to improve your well-being.
          </p>
          <div className="flex justify-center">
            <Link href="/remedies">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                View Remedies
              </button>
            </Link>
          </div>
        </section>

        {/* Featured Remedies */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-black">Featured Remedies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example Cards for Featured Remedies */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2 text-black">Lemon Honey Water</h3>
              <p className="text-gray-700 mb-4">
                A refreshing drink that boosts immunity and aids digestion.
              </p>
              <div className="flex justify-center">
                <Link href="/remedies/lemon-honey-water">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2 text-black">Ginger Garlic Paste</h3>
              <p className="text-gray-700 mb-4">
                Natural remedy for cold and flu symptoms.
              </p>
              <div className="flex justify-center">
                <Link href="/remedies/ginger-garlic-paste">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2 text-black">Turmeric Milk</h3>
              <p className="text-gray-700 mb-4">
                Anti-inflammatory drink to relieve joint pain and boost immunity.
              </p>
              <div className="flex justify-center">
                <Link href="/remedies/turmeric-milk">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Symptom Checker */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-black">Check Your Symptoms</h2>
          <form onSubmit={handleSymptomSubmit} className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Enter your symptom"
              value={symptom}
              onChange={handleSymptomChange}
              className="mb-4 p-2 border border-gray-300 rounded-md w-full max-w-md text-black"
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
              Find Probable Diseases
            </button>
          </form>
          {diseases.length > 0 && (
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2 text-black">Probable Diseases:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {diseases.map((disease, index) => (
                  <li key={index}>{disease}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Call to Action */}
        <section className="bg-blue-500 text-white py-8 px-4 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Start Your Journey to Better Health Today!</h2>
          <p className="text-lg mb-4">
            Discover more natural remedies and tips for a healthier lifestyle.
          </p>
          <div className="flex justify-center">
            <Link href="/remedies">
              <button className="bg-white text-blue-500 hover:bg-gray-200 hover:text-blue-600 py-2 px-4 rounded-md">
                Explore Remedies
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
