import React, { useState } from "react";
import { X, Send, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BotAvatar from "../assets/chatbot/cute-bot-say-users-hello-chatbot-greets-online-consultation/195.png";

export default function Chatbot() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! 👋 Welcome to KotiBoxSkillX. Choose an option below or type your question.",
    },
  ]);

  const quickQuestions = [
    { label: "Available Courses", value: "Tell me about your courses" },
    { label: "Fees & Offers", value: "What are the course fees?" },
    { label: "Placement Support", value: "Do you provide placement support?" },
    { label: "Contact Details", value: "How can I contact KotiBoxSkillX?" },
    { label: "Admission Help", value: "I want help with admission" },
  ];

  const handleSend = (presetText) => {
    const text = (presetText ?? input).trim();
    if (!text) return;

    const userMessage = { from: "user", text };

    let reply = "Thanks! Our team will connect with you soon. 😊";
    const lower = text.toLowerCase();

    if (lower.includes("course"))
      reply =
        "We offer MERN Stack, Full-Stack Java, Python, and Web Development courses.";

    if (lower.includes("fee") || lower.includes("price"))
      reply =
        "Course fees vary by program and duration. We also run discounts and offers.";

    if (lower.includes("placement"))
      reply =
        "Yes, we provide 100% placement assistance with mock interviews, resume building, and referrals.";

    if (lower.includes("contact"))
      reply =
        "You can call us, visit the Contact page, or fill the admission form for a callback.";

    if (lower.includes("admission") || lower.includes("enroll"))
      reply =
        "You can apply online using our Admission Form. Our team will guide you with the next steps.";

    setMessages((prev) => [...prev, userMessage, { from: "bot", text: reply }]);
    setInput("");
  };

  const handleQuickClick = (value) => {
    handleSend(value);
  };

  const handleDetailsClick = (type) => {
    if (type === "courses") navigate("/courses");
    if (type === "contact") navigate("/contact");
    if (type === "admission") navigate("/admission");
  };

  return (
    <>
      {/* CHAT WINDOW */}
      {open && (
        <div className="fixed bottom-20 right-6 w-[320px] max-w-[90vw] h-[460px] bg-white shadow-2xl rounded-xl flex flex-col z-50">
          {/* Header */}
          <div className="bg-orange-500 text-white px-4 py-3 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src={BotAvatar}
                alt="Chatbot Avatar"
                className="w-8 h-8 rounded-full border border-white object-cover"
              />
              <span className="font-bold text-sm">KotiBoxSkillX Assistant</span>
            </div>
            <button onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 text-sm space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-3 py-2 rounded-lg ${
                  msg.from === "bot"
                    ? "bg-gray-100 text-left"
                    : "bg-orange-500 text-white ml-auto text-right"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Quick options */}
          <div className="border-t px-3 py-2">
            <div className="flex items-center gap-1 mb-1 text-[11px] text-gray-500">
              <Info size={12} />
              <span>Quick questions:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((q) => (
                <button
                  key={q.label}
                  onClick={() => handleQuickClick(q.value)}
                  className="px-2.5 py-1 rounded-full border border-gray-300 text-[11px] hover:bg-orange-50 hover:border-orange-400"
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          {/* Details buttons */}
          <div className="px-3 pb-2 flex gap-2 flex-wrap">
            <button
              onClick={() => handleDetailsClick("courses")}
              className="flex-1 text-[11px] border border-orange-500 text-orange-600 rounded-md px-2 py-1 hover:bg-orange-50"
            >
              View Courses
            </button>
            <button
              onClick={() => handleDetailsClick("admission")}
              className="flex-1 text-[11px] border border-orange-500 text-orange-600 rounded-md px-2 py-1 hover:bg-orange-50"
            >
              Admission Form
            </button>
            <button
              onClick={() => handleDetailsClick("contact")}
              className="w-full text-[11px] border border-gray-300 text-gray-700 rounded-md px-2 py-1 hover:bg-gray-50"
            >
              Contact Details
            </button>
          </div>

          {/* Input */}
          <div className="border-t flex p-2 gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border px-2 py-1 rounded focus:outline-none text-sm"
            />
            <button
              onClick={() => handleSend()}
              className="bg-orange-500 text-white px-3 rounded flex items-center gap-1"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white w-20 h-20 rounded-full shadow-xl flex items-center justify-center z-40"
      >
       <img
  src={BotAvatar}
  alt="Chatbot Avatar"
  className="w-20 h-20 rounded-full object-cover"
/>

      </button>
    </>
  );
}
