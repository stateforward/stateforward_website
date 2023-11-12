import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const TabbedContent = () => {
  const [activeTab, setActiveTab] = useState('Python');

  const renderContent = () => {
    switch (activeTab) {
        case 'Rust':
            return (
              <SyntaxHighlighter language="rust" style={atomDark}>
    {`// Rust code example
    fn main() {
        println!("Hello, Rust!");
    }`}
              </SyntaxHighlighter>
            );
          case 'React':
            return (
              <SyntaxHighlighter language="jsx" style={atomDark}>
    {`// React code example
    import React from 'react';
    
    function App() {
      return <div>Hello, React!</div>;
    }
    
    export default App;`}
              </SyntaxHighlighter>
            );
      case 'Python':
      default:
        return (
          <SyntaxHighlighter language="python" style={atomDark}>
{`import stateforward as sf
import asyncio

class OnEvent(sf.Event):
    pass

class OffEvent(sf.Event):
    pass

class LightSwitch(sf.AsyncStateMachine):
    class On(sf.State):
        async def entry(self, event: OnEvent):
            print("Light on")

        async def exit(self, event: OffEvent):
            print("Switching off...")

    class Off(sf.State):
        async def entry(self, event: OffEvent):
            print("Light off")

        async def exit(self, event: OnEvent):
            print("Switching on...")

    initial = sf.initial(Off)
    transitions = sf.collection(
        sf.transition(OnEvent, source=Off, target=On),
        sf.transition(OffEvent, source=On, target=Off),
    )

async def main():
    light_switch = LightSwitch()
    await light_switch.interpreter.start()
    print(light_switch.state)
    await sf.dispatch(OnEvent(), light_switch)
    print(light_switch.state)
    await sf.dispatch(OffEvent(), light_switch)
    print(light_switch.state)

asyncio.run(main())`}
          </SyntaxHighlighter>
        );
    }
  };

  return (
    <div className=" mb-16">
      <div className="tabs mt-8 mb-0 flex justify-center">
        <a className={`tab tab-md tab-lifted ${activeTab === 'Rust' ? 'tab-active' : ''}`} onClick={() => setActiveTab('Rust')}>Rust</a> 
        <a className={`tab tab-md tab-lifted ${activeTab === 'Python' ? 'tab-active' : ''}`} onClick={() => setActiveTab('Python')}>Python</a> 
        <a className={`tab tab-md tab-lifted ${activeTab === 'React' ? 'tab-active' : ''}`} onClick={() => setActiveTab('React')}>React</a>
      </div>
      {renderContent()}
    </div>
  );
};

export default TabbedContent;