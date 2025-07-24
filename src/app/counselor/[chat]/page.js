"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function counselor() {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = message;
    setMessage("");

    setChatLog((prev) => [...prev, { type: "user", content: userMessage }]);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ prompt: userMessage }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    setChatLog((prev) => [...prev, { type: "bot", content: data.reply }]);
  };
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-70 py-6 sm:py-10 md:py-15">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">
        AI Counselor Chat
      </h1>

      <div className="max-w-3xl">
        <p className="mb-4 sm:mb-6 text-base sm:text-lg text-gray-600">
          Chat with our AI counselor to get personalized guidance on colleges,
          careers, and the application process.
        </p>

        <div className="rounded-lg border bg-white shadow-sm">
          <div className="border-b p-4">
            <h2 className="font-medium">AI Counselor Chat</h2>
          </div>

          <div className="h-[400px] overflow-y-auto p-4">
            {chatLog.length === 0 ? (
              <div className="flex items-center justify-center h-full text-gray-500">
                Start a conversation with the AI counselor
              </div>
            ) : (
              <div className="space-y-4">
                {chatLog.map((chat, index) => (
                  <div key={index} className="space-y-2">
                    {chat.type === "user" ? (
                      <div className="flex justify-end">
                        <div className="bg-black text-white px-4 py-2 rounded-lg max-w-[80%]">
                          <p className="text-sm">{chat.content}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg max-w-[80%]">
                          <p className="text-sm">{chat.content}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t p-4">
            <div className="flex items-center gap-2">
              <Input
                placeholder="Type your message..."
                className="flex-1"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="bg-black text-white hover:bg-gray-800"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
