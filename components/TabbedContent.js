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
          case 'Javascript':
            return (
              <SyntaxHighlighter language="jsx" style={atomDark}>
    {`// Javascript code example
    import Javascript from 'javascript';
    
    function App() {
      return <div>Hello, Javascript!</div>;
    }
    
    export default App;`}
              </SyntaxHighlighter>
            );
      case 'Python':
      default:
        return (
          <SyntaxHighlighter language="python" style={atomDark}>
{`import asyncio
from dataclasses import dataclass
import stateforward as sf


class OnEvent(sf.Event):
    pass


class OffEvent(sf.Event):
    pass


class PrintBehavior(sf.Behavior):
    def activity(self, event: sf.Event = None):
        pass


@dataclass(unsafe_hash=True)
class FooEvent(sf.Event):
    foo: str


class LightSwitch(sf.AsyncStateMachine):
    flashing = False
    FlashEvent = sf.when(lambda self, event=None: self.model.flashing)

    class On(sf.State):
        entry = sf.redefine(PrintBehavior)
        exit = sf.redefine(PrintBehavior)

    class Off(sf.State):
        entry = sf.redefine(PrintBehavior)
        exit = sf.redefine(PrintBehavior)

    class Broken(sf.State):
        pass

    class Flashing(sf.State):
        pass

    initial = sf.initial(Off)
    transitions = sf.collection(
        sf.transition(OnEvent, source=Off, target=On),
        sf.transition(OffEvent, source=On, target=Off),
        sf.transition(FlashEvent, source=Off, target=Flashing),
    )


class ThreeWay(LightSwitch):
    pass

async def light_switch_main():
    # instantiate a light switch
    light_switch = LightSwitch()
    # start the interpreter and wait for it to be settled
    await light_switch.interpreter.start()
    # output the current states of the state machine
    print(light_switch.state)
    # dispatch a OnEvent to the state machine
    await sf.send(OnEvent(), light_switch)
    # output the current states of the state machine
    print(light_switch.state)
    # dispatch a OffEvent to the state machine
    await sf.send(OffEvent(), light_switch)


asyncio.run(light_switch_main())
`}
          </SyntaxHighlighter>
        );
    }
  };

  return (
    <div className=" mb-16">
      <div className="tabs mt-8 mb-0 flex justify-center">
        <a className={`tab tab-md tab-lifted ${activeTab === 'Rust' ? 'tab-active' : ''}`} onClick={() => setActiveTab('Rust')}>Rust</a> 
        <a className={`tab tab-md tab-lifted ${activeTab === 'Python' ? 'tab-active' : ''}`} onClick={() => setActiveTab('Python')}>Python</a> 
        <a className={`tab tab-md tab-lifted ${activeTab === 'Javascript' ? 'tab-active' : ''}`} onClick={() => setActiveTab('Javascript')}>Javascript</a>
      </div>
      {renderContent()}
    </div>
  );
};

export default TabbedContent;