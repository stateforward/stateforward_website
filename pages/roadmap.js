// pages/roadmap.js

import Head from 'next/head';
import RoadmapItem from '../components/RoadmapItem';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RoadmapPage = () => {
  return (
    <>
    <Header />
    <div className="container mx-auto p-4 min-h-screen">
      <Head>
        <title>StateForward Roadmap</title>
        <meta name="description" content="StateForward Project Roadmap" />
        <meta name="robots" content="index, follow"></meta>
      </Head>
      <h1 className="text-3xl font-bold mb-6">Project Roadmap</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Submachine</h2>
        <RoadmapItem
          completed={true}
          title="Implement Submachine"
          description="Creation of a substate machine within the larger state machine architecture is complete."
        />
        <RoadmapItem
          completed={false}
          title="Define Entry Point"
          description="Establish the initialization state where the submachine commences its process."
        />
        <RoadmapItem
          completed={false}
          title="Institute Exit Point"
          description="Designate the final state that concludes the submachine's execution and handle any necessary state cleanup."
        />
      </div>

      <div className="mb-8">
  <h2 className="text-2xl font-bold mb-4">History Pseudostates</h2>
  <RoadmapItem
    completed={false}
    title="Integrate Shallow History"
    description="Develop a state memory system that recalls the most recent active substate without retaining nested state histories, enabling reentry at the last active state."
  />
  <RoadmapItem
    completed={false}
    title="Incorporate Deep History"
    description="Implement a comprehensive state memory system that retains complete nested state histories for accurate restoration upon reentry."
  />
</div>

<div className="mb-8">
  <h2 className="text-2xl font-bold mb-4">StateMachine Interpreters</h2>
  <RoadmapItem
    completed={true}
    title="Implement Async StateMachine Interpreter"
    description="Completed the asynchronous state machine interpreter, facilitating non-blocking state execution."
  />
  <RoadmapItem
    completed={false}
    title="Develop Multi-Processing StateMachine Interpreter"
    description="Construct an interpreter that utilizes multiple processes for parallel state processing, enhancing performance for computations."
  />
  <RoadmapItem
    completed={false}
    title="Construct Thread-Based Interpreter"
    description="Build an interpreter that manages state operations via threading, optimizing for concurrent I/O-bound tasks."
  />
  <RoadmapItem
    completed={false}
    title="Design SequentialStateMachine Interpreter"
    description="Initiate the creation of an interpreter that deals with state transitions in a sequential, ordered manner, designed for straightforward execution flows."
  />
</div>

<div className="mb-8">
  <h2 className="text-2xl font-bold mb-4">Unit Tests</h2>
  <RoadmapItem
    completed={false}
    title="Develop Unit Tests"
    description="Write tests for individual state components to evaluate their independent functionalities, ensuring reliability and bug-free operation."
  />
</div>

<div className="mb-8">
  <h2 className="text-2xl font-bold mb-4">Documentation</h2>
  <RoadmapItem
    completed={false}
    title="Compile Documentation"
    description="Produce detailed documentation outlining the state machine's configuration, including its states, transitions, and state machine protocols, to support maintenance and usage comprehension."
  />
</div>

<div className="mb-8">
  <h2 className="text-2xl font-bold mb-4">Interpreter Refactoring</h2>
  <RoadmapItem
    completed={false}
    title="Refactor Interpreter Logic"
    description="Rework the interpreter component to execute a sequence of abstract instructions, rather than direct manipulation of the state tree, for better modularity and maintainability."
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