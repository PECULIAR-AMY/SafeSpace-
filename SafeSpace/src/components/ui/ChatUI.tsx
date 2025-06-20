// import React from 'react';
// import agentAvatar from './assets/avatar.png';
// import bgPattern from './assets/chat-bg.svg';

// type ChatBubbleProps = {
//   text: string;
//   sender?: 'user' | 'agent';
// };

// function ChatBubble({ text, sender = 'user' }: ChatBubbleProps) {
//   const isUser = sender === 'user';

//   return (
//     <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3 items-end`}>
//       {!isUser && (
//         <img
//           src={agentAvatar}
//           alt="Agent"
//           className="w-6 h-6 rounded-full mr-2 object-cover"
//         />
//       )}
//       <div
//         className={`px-4 py-2 rounded-xl text-sm max-w-xs ${
//           isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
//         }`}
//       >
//         {text}
//       </div>
//     </div>
//   );
// }

// export default function ChatUI() {
//   return (
//     <div className="relative min-h-screen bg-black text-white overflow-hidden">
//       {/* Background pattern */}
//       <img
//         src={bgPattern}
//         alt="Background"
//         className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
//       />

//       {/* Chat content */}
//       <div className="relative z-10 bg-black p-4 rounded-lg shadow-md max-w-md mx-auto">
//         <ChatBubble sender="agent" text="I have not received my order yet?" />
//         <ChatBubble sender="user" text="Your tracking ID is 5PK23456" />
//         <ChatBubble sender="agent" text="Perfect ...that's all I needed" />
//       </div>
//     </div>
//   );
// }
