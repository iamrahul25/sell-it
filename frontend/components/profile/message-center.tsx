"use client";

import { FormEvent, useState } from "react";
import { Search, Send, User } from "lucide-react";

const conversations = [
  { name: "Amit Sharma", preview: "Is this still available?", time: "2m" },
  { name: "Priya Verma", preview: "Can you share more photos?", time: "1h" },
  { name: "Karan Mehta", preview: "₹7,000 works for me.", time: "3h" },
  { name: "Sneha Gupta", preview: "Thanks!", time: "1d" },
];

export function MessageCenter() {
  const [selected, setSelected] = useState(conversations[0]);
  const [message, setMessage] = useState("");
  const [sentMessages, setSentMessages] = useState<string[]>([]);

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!message.trim()) return;
    setSentMessages((current) => [...current, message.trim()]);
    setMessage("");
  }

  return (
    <div className="grid min-h-[600px] overflow-hidden rounded-2xl border border-line bg-white shadow-[0_2px_12px_rgba(15,23,42,.04)] md:grid-cols-[300px_1fr]">
      <aside className="border-b border-line md:border-b-0 md:border-r">
        <div className="p-4">
          <label className="flex h-10 items-center rounded-lg bg-slate-100 px-3">
            <Search className="size-4 text-muted" />
            <input
              type="search"
              placeholder="Search conversations"
              className="w-full bg-transparent px-2 text-sm outline-none"
            />
          </label>
        </div>
        <div className="no-scrollbar flex overflow-x-auto md:block">
          {conversations.map((conversation) => (
            <button
              key={conversation.name}
              onClick={() => {
                setSelected(conversation);
                setSentMessages([]);
              }}
              className={`flex min-w-64 items-center gap-3 border-t border-line p-4 text-left md:w-full ${
                selected.name === conversation.name ? "bg-brand-soft" : "hover:bg-slate-50"
              }`}
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-slate-100 text-muted">
                <User className="size-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex justify-between gap-2 text-sm font-semibold">
                  {conversation.name}
                  <span className="text-[10px] font-normal text-muted">
                    {conversation.time}
                  </span>
                </span>
                <span className="mt-1 block truncate text-xs text-muted">
                  {conversation.preview}
                </span>
              </span>
            </button>
          ))}
        </div>
      </aside>

      <section className="flex min-h-[420px] flex-col">
        <header className="flex items-center gap-3 border-b border-line p-4">
          <span className="grid size-10 place-items-center rounded-full bg-brand-soft text-brand">
            <User className="size-4" />
          </span>
          <div>
            <h2 className="text-sm font-bold">{selected.name}</h2>
            <p className="text-[11px] text-brand">Online</p>
          </div>
        </header>
        <div className="flex-1 space-y-3 bg-slate-50/50 p-4 sm:p-6">
          <p className="w-fit max-w-[80%] rounded-2xl rounded-bl-sm bg-white px-4 py-3 text-sm shadow-sm">
            Hi! Is this still available?
          </p>
          <p className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-brand px-4 py-3 text-sm text-white">
            Yes, it is available.
          </p>
          {sentMessages.map((sentMessage, index) => (
            <p
              key={`${sentMessage}-${index}`}
              className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-brand px-4 py-3 text-sm text-white"
            >
              {sentMessage}
            </p>
          ))}
        </div>
        <form onSubmit={sendMessage} className="flex gap-2 border-t border-line p-3">
          <input
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Type a message..."
            className="h-11 min-w-0 flex-1 rounded-xl border border-line px-4 text-sm outline-none focus:border-brand"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="grid size-11 place-items-center rounded-xl bg-brand text-white"
          >
            <Send className="size-4" />
          </button>
        </form>
      </section>
    </div>
  );
}
