import React, { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { Link } from 'react-router-dom'
// import ChatUI from "../components/ui/ChatUI"; // make sure the path is correct

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-black">
      <div className="bg-amber-400 p-4 h-screen mx-50 overflow-y-auto">
        <div className="flex justify-between items-center mx-20">
          {/* Left side: icon and text */}
          <div className="flex items-center space-x-2">
            <MessageCircle size={80} className="text-blue-600" />
            <div>
              <h1 className="font-bold text-black text-lg">Chat me</h1>
              <h2 className="text-sm text-black">powered by Workpaddy</h2>
            </div>
          </div>

          {/* Right side: menu icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="mt-4 w-20 bg-white rounded shadow-md p-4 transition-all">
            <ul className="space-y-2 text-black">
              <li className="hover:underline">Home</li>
              <li className="hover:underline">About</li>
              <li className="hover:underline">Contact</li>
            </ul>
          </div>
        )}

        <section className=" flex flex-1 gap-100 mt-8 text-black">
        <div> 
          {/* Insert ChatUI component here */}
          {/* <ChatUI /> */}
          <h1>Avatar</h1>
          </div>
         <div> 
          <h1 className="text-5xl">Welcome to Chat me</h1>
          <h2>Im your surest work paddy, you can Count on me at anytime too</h2>
          <h1 className="mt-10 mb-5">How?</h1>
          <h2>This is your work paddy, ask me anything
             thing bothering you and in here to brighten up
              your day and make your excited to go back to work
               </h2>
             <Link to='/exercise'>
              <button className="bg-amber-700 w-40 border-2 mt-50 h-10 rounded-4xl ">Get started </button>
             </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
