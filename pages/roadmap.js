// pages/roadmap.js

import Head from 'next/head';
import RoadmapItem from '../components/RoadmapItem';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RoadmapPage = () => {
  return (
      <>
        <Header />
        <div className="flex container flex-col mx-auto p-4 min-h-screen gap-4">
          <Head>
            <title>StateForward Roadmap</title>
            <meta name="description" content="Overview of current and future development phases for the StateForward project including Rust library development and backend transition of Python and JavaScript libraries." />
            <meta name="robots" content="index, follow"></meta>
          </Head>
          <h1 className="text-3xl font-bold mb-6">Project Roadmap</h1>
          <p className={"text-gray-300 text-sm"}>
            Most of the Python functionality is operational. However, while developing the TypeScript library, I recognized that it would be more logical to first develop the Rust library and subsequently transition both the Python and JavaScript libraries to utilize the Rust library for backend operations. This approach will ensure a more uniform and efficient codebase across all languages. Therefore, our current efforts are concentrated on developing the Rust library. Unless significant issues arise with integrating the Rust library into the Python and JavaScript environments, we will proceed with transitioning these libraries to use the Rust backend.
          </p>
          <div className="">
            <h2 className="text-2xl font-bold mb-4">Rust Library Development</h2>
            <RoadmapItem
                state={"completed"}
                title="Initialize Rust Library"
                description="Set up the basic structure and configuration for the new Rust library, establishing the foundation for backend logic and algorithms."
            />
            <RoadmapItem
              state={"in-progress"}
                title="Develop Core Functionalities"
                description="Implement essential features and functionalities tailored to the needs of backend processes using Rust’s powerful concurrency capabilities."
            />
            <RoadmapItem
                state={"in-progress"}
                title="Write Unit Tests"
                description="Write unit tests to ensure the stability and reliability of the Rust library, covering all core functionalities and edge cases."
            />
            <RoadmapItem
                completed={false}
                title="Optimize Performance"
                description="Enhance performance through Rust's zero-cost abstractions, focusing on speed and memory efficiency."
            />
          </div>

          <div className="">
            <h2 className="text-2xl font-bold mb-4">Python Library Development</h2>
            <RoadmapItem
                state={"completed"}
                title="Implement core api surface"
                description="Implement the core API surface for the Python library, providing a user-friendly interface for state management."
            />
            <RoadmapItem
                state={"completed"}
                title="Implement Async StateMachine"
                description="Implement the AsyncStateMachine class in Python, providing a powerful and flexible tool for managing asynchronous state transitions."
            />
            <RoadmapItem
                state={"in-progress"}
                title="Write comprehensive tests"
                description="Write extensive tests for the Python library to ensure stability and reliability across different use cases."
            />
          </div>
          <p className="text-gray-600 italic mb-8">
            See the open issues for a full list of proposed features (and known issues).
          </p>

        </div>
        <Footer />
      </>
  );
};

export default RoadmapPage;