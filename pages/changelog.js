import React from 'react';
import Link from 'next/link';
import ChangeLogItem from '../components/ChangeLogItems';
import Header from '../components/Header';
import Footer from '../components/Footer';

const changes = [
  // Sample data, replace with your data fetching logic
  {
    id: '1',
    date: '2023-11-12',
    title: 'Release of StateForward v0.1',
    summary: 'We have officially launched the first version of StateForward and the StateForward.org website... many more changes to come!',
  },
  // Add more changes as needed
];

const ChangeLogPage = () => {
  return (
    <>
    <Header />
    <main className="mb-auto bg-black">
            <div className="container mx-auto p-4 min-h-screen">

      <div className="divide-y divide-base-300">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-bold mb-6">Latest Changes</h1>
          <p className="text-lg leading-7 text-gray-500">Updates and improvements to StateForward</p>
        </div>
        <ul>
          {changes.map(change => (
            <ChangeLogItem key={change.id} change={change} />
          ))}
        </ul>
        </div>
      </div>
    </main>
    <Footer />
     </>
  );
};

export default ChangeLogPage;
