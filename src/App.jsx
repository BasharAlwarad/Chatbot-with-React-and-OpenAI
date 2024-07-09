import { useState } from 'react';
import { Chat } from './components/Chat';
import { Form } from './components/Form';

function App() {
  const [messages, setMessages] = useState([
    {
      id: crypto.randomUUID(),
      role: 'system',
      content: 'You are a helpful assistant.',
    },
  ]);

  return (
    <>
      <Form setMessages={setMessages} messages={messages} />
      <Chat messages={messages} />
    </>
  );
}

export default App;
