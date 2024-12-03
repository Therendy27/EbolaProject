"use client"
import Image from "next/image";
import Head from "next/head";


// export const metadata = {
//   title: 'Ebola Information Center',
//   description: 'Get the latest updates, symptoms, and prevention tips on the Ebola virus outbreak.',
//   icons: {
//     icon: '/favicon.ico',
//   },
// };

import {useEffect, useState} from 'react';

export default function Home() {
  const [outbreakData, setOutbreakData] = useState(null);

  useEffect(() => {
    // Fetch real-time outbreak data from a sample API endpoint
    fetch('https://api.example.com/ebola-outbreak') // Replace with real API URL
      .then((response) => response.json())
      .then((data) => setOutbreakData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  return(
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 ">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-6">
          Stay Informed on the Ebola Outbreak
        </h1>
        <p className="mt-3 text-2xl text-gray-700 max-w-2xl">
          Get the latest updates, learn about symptoms, prevention, and how you can protect yourself and your loved ones.
        </p>
        <div className="flex flex-wrap items-center justify-center mt-6">
          <a href="/about" className="m-4 px-6 py-3 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Learn About Ebola
          </a>
          <a href="/live-updates" className="m-4 px-6 py-3 text-lg bg-green-500 text-white rounded-lg hover:bg-green-600">
            Live Updates
          </a>
        </div>
        </main>
        {/* <footer className="w-full h-24 flex items-center justify-center border-t mt-8">
        <p className="text-gray-600">&copy; 2024 Ebola Information Center</p>
      </footer> */}
    </div>
  )
}
