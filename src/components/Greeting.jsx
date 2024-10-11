import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button class="bg-[#023047] text-white px-2 py-1 mt-2 rounded-lg outline outline-[#ffb703] outline-offset-2 outline-2" onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}