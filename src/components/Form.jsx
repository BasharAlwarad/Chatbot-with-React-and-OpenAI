import { useState } from 'react';
import { ORIGIN_URL } from '../config';
import Chat from './Chat';

const Form = () => {
  const [messages, setMessages] = useState([
    {
      id: crypto.randomUUID(),
      role: 'system',
      content:
        'You are a software engineer who gives short answers all the time.',
    },
  ]);

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const newMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: message,
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage('');

    try {
      const response = await fetch(`${ORIGIN_URL}/api/v1/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: [...messages, newMessage] }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response');
      }

      const data = await response.json();
      const assistantMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: data.message.content,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };

  return (
    <>
      <form
        className="flex flex-col w-full p-4 bg-red-300 rounded-lg shadow-md"
        onSubmit={onSubmit}
      >
        <textarea
          autoFocus
          name="message"
          placeholder="Type your message here"
          onChange={handleChange}
          value={message}
          className="block w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </form>
      <Chat messages={messages} />
    </>
  );
};

export default Form;
