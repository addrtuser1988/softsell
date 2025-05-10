import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Hardcoded example Q&A pairs
const EXAMPLES = [
  {
    q: "How do I sell my license?",
    a: "To sell your license, click 'Get a Quote', fill out the form, and our team will contact you with a valuation."
  },
  {
    q: "How long does it take to get paid?",
    a: "Once you accept our offer, payment is processed instantly via your preferred method."
  },
  {
    q: "Is my data secure?",
    a: "Yes, we use industry-standard encryption and never share your data with third parties."
  }
];

const FALLBACK = "Sorry, I don't have an answer for that yet. Please contact our team for more help!";

function getAIResponse(question) {
  // Simple mock: match hardcoded Qs, else fallback
  const found = EXAMPLES.find(
    ex => ex.q.toLowerCase() === question.trim().toLowerCase()
  );
  return found ? found.a : FALLBACK;
}

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I’m SoftSell’s assistant. Ask me anything or try: 'How do I sell my license?'" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages(msgs => [...msgs, userMsg]);
    setTimeout(() => {
      const aiMsg = { from: "bot", text: getAIResponse(input) };
      setMessages(msgs => [...msgs, aiMsg]);
    }, 600);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            className="w-80 bg-white shadow-xl rounded-xl flex flex-col border border-gray-200"
            style={{ maxHeight: 420 }}
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-blue-600 rounded-t-xl">
              <span className="text-white font-semibold">SoftSell Chat</span>
              <button
                className="text-white text-xl"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                ×
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-gray-50">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${
                      msg.from === "user"
                        ? "bg-yellow-300 text-yellow-900"
                        : "bg-green-300 text-green-900"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="flex items-center border-t border-gray-200 p-2 bg-white rounded-b-xl">
              <input
                type="text"
                className="flex-1 px-3 py-2 rounded border border-gray-300 bg-gray-100 text-gray-900 focus:outline-none"
                placeholder="Type your question…"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSend()}
                aria-label="Type your question"
              />
              <button
                className="ml-2 px-3 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                onClick={handleSend}
                aria-label="Send"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!open && (
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4 flex items-center justify-center"
          onClick={() => setOpen(true)}
          aria-label="Open chat"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path d="M12 3C6.48 3 2 6.92 2 12c0 2.08.8 3.97 2.13 5.47L3 21l3.66-1.1C8.93 20.6 10.43 21 12 21c5.52 0 10-3.92 10-9s-4.48-9-10-9z" fill="currentColor"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;