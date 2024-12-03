"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LiveUpdates() {
  const [outbreakData, setOutbreakData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://disease.sh/v3/covid-19/countries') // Replace with actual Ebola outbreak endpoint if available
      .then((response) => response.json())
      .then((data) => {
        setOutbreakData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching outbreak data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold text-blue-600">Loading outbreak data...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-12 bg-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">Real-Time Outbreak Data</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {outbreakData ? (
          outbreakData.map((country) => (
            <div key={country.country} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Image
                  src={country.countryInfo.flag}
                  alt={`Flag of ${country.country}`}
                  width={40}
                  height={25}
                  className="mr-4 rounded-sm"
                />
                <h3 className="text-2xl font-semibold text-black">{country.country}</h3>
              </div>
              <p className="text-lg text-gray-800 mb-2">
                <strong>Cases:</strong> {country.cases.toLocaleString()}
              </p>
              <p className="text-lg text-gray-800 mb-2">
                <strong>Deaths:</strong> {country.deaths.toLocaleString()}
              </p>
              <p className="text-lg text-gray-800">
                <strong>Recovered:</strong> {country.recovered.toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-800">No data available.</p>
        )}
      </div>
    </div>
  );
}
