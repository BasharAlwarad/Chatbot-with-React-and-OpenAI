// import { useState } from 'react';
// import { Chat } from './components/Chat';
// import { Form } from './components/Form';
import { Register } from './components/Register';

function App() {
  // const [messages, setMessages] = useState([
  //   {
  //     id: crypto.randomUUID(),
  //     role: 'system',
  //     content: 'You are a helpful assistant.',
  //   },
  // ]);

  return (
    <>
      <Register />
      {/* <Form setMessages={setMessages} messages={messages} /> */}
      {/* <Chat messages={messages} /> */}
    </>
  );
}

export default App;
