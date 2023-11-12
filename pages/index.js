import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TabbedContent from '../components/TabbedContent';
import InfoCard from '../components/InfoCard';
import { FiCopy } from 'react-icons/fi';
import Head from 'next/head';
import InfoCardGroup from '../components/InfoCardsHome'; // Importing the new component

export default function Home() {
  const textVersions = [
    'pip install stateforward',
    'npm i stateforward',
    'cargo add stateforward',
  ];
  const [currentText, setCurrentText] = useState(textVersions[0]);
  const [fade, setFade] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showWarningAlert, setShowWarningAlert] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      setShowWarningAlert(true);
      setTimeout(() => setShowWarningAlert(false), 2000);
    }
  };

  useEffect(() => {
    let currentVersion = 0;
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        currentVersion = (currentVersion + 1) % textVersions.length;
        setCurrentText(textVersions[currentVersion]);
        setFade(false);
      }, 500); // fade out duration
    }, 3000); // text change interval

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>StateForward</title>
        <meta name="description" content="Universal state management. StateForward transcends language barriers, bringing clarity and structure to your projects, be it in Python, JavaScript, or beyond." />
        <meta name="robots" content="index, follow" />
      </Head>
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <div className="text-center my-24 container mx-auto p-4">
      <h1 className="text-5xl font-bold">Universal State Management</h1>
          <p className="py-6">StateForward transcends language barriers, bringing clarity and structure to your projects, be it in Python, JavaScript, or beyond.</p>
                           <div className="relative border mb-2 border-base-300 bg-black rounded-lg p-4 inline-block w-full max-w-xl">
          <p className={`font-mono font-bold transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
            <span className="text-gray-500">$</span> {currentText}
          </p>
          <button 
            onClick={() => copyToClipboard(currentText)}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white pr-2"
            aria-label="Copy to clipboard"
          >
            <FiCopy size={20} />
          </button>
        </div>
        {showSuccessAlert && <div className="alert-success">Copied!</div>}
        {showWarningAlert && <div className="alert-warning">Failed to copy!</div>}
              <h2 className="text-3xl font-bold mt-16">See it in action!</h2>
          <TabbedContent />
          <div className="flex flex-col md:flex-row justify-center items-center mt-4 mb-16 mx-8">
          <InfoCardGroup />
          </div>
        </div>
      </main>
      <Footer />
    </div>
    </>
  );
}
