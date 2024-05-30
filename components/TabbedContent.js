import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const TabbedContent = () => {
  const [activeTab, setActiveTab] = useState('Rust');

  const renderContent = () => {
    switch (activeTab) {
        case 'Rust':
            return (
              <SyntaxHighlighter language="rust" style={atomDark}>
    {`// API is a work in progress and is subject to change
use stateforward as sf;

struct E1Interface {}

struct O1Interface {
    value: i32
}
let mut example_model = sf::model(vec![
  sf::statemachine("sm", vec![
      sf::event("e1", E1Interface {}),
      sf::operation("o1", |_:&sf::Model, args: Option<Box<dyn Any>>| {
          None
      }),
      sf::attribute("a1", 1),
      sf::region("r1", vec![
          sf::state("s1", vec![
              sf::entry(|_, _: &mut Behavior| {
                  println!("Hello from entry");
              }),
          ]),
          sf::state("s2", vec![]),
          sf::transition(vec!["/sm/e1"], "s1", "s2", None, None),
      ]),
      sf::region("r2", vec![
          sf::state("s2", vec![])
      ])
  ])
]);

example_model.execute();
    `}
              </SyntaxHighlighter>
            );
          case 'Javascript':
            return (
              <SyntaxHighlighter language="jsx" style={atomDark}>
    {`
import * as sf from "stateforward";

const example_model = sf.model({
  sm: sf.statemachine({
    a1: sf.attribute<string>(""),
    s1: sf.state({
      async activity(element) {},
    }),
    o1: sf.operation(async (port: number) => {
      console.log("operation");
    }),
    r1: sf.region({
      s1: sf.state({
          async activity(element) {},
        },
      ),
      s2: sf.state({}),
      initial: sf.initial("s1"),
      s1_s2: sf.transition({
        source: "s1",
        target: "s2"
      }),
    }),
    r2: sf.region({
      s1: sf.state({
          async activity(self) {
            console.log("activity", this);
          },
        },
      ),
      initial: sf.initial("s1"),
    })
  })
});

await example_model.execute();
`}
              </SyntaxHighlighter>
            );
      case 'Python':
      default:
        return (
          <SyntaxHighlighter language="python" style={atomDark}>
{`import asyncio
import stateforward as sf


class OnEvent(sf.Event):
    pass


class OffEvent(sf.Event):
    pass


class PrintBehavior(sf.Behavior):
    def activity(self, event: sf.Event = None):
        pass

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