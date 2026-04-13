"use client";

import { useEffect, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

const greeting =
  "Здравствуйте! Я помощник ООО АМЕТ. Помогу подобрать материал, рассчитать стоимость или ответить на вопрос по заказу. Чем могу помочь? 🔧";

const quickActions = [
  "Узнать цену резки",
  "Как отправить чертёж?",
  "Позвонить",
];

export default function AiAssistant() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", text: greeting },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) {
      return;
    }

    const nextMessages = [...messages, { role: "user" as const, text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!response.ok) {
        throw new Error("Ошибка API чата");
      }

      if (!response.body) {
        throw new Error("Нет ответа от сервера");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";
      setMessages((previous) => [...previous, { role: "assistant", text: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        assistantText += decoder.decode(value, { stream: true });
        setMessages((previous) => {
          const updated = [...previous];
          updated[updated.length - 1] = {
            role: "assistant",
            text: assistantText,
          };
          return updated;
        });
      }
    } catch {
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text: "Не удалось получить ответ. Напишите в Telegram @sadykovandrey или позвоните +7 (903) 523-90-25.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        className="fixed bottom-20 right-4 z-50 h-14 w-14 rounded-full bg-[#f97316] text-2xl text-white shadow-lg"
        onClick={() => setOpen((value) => !value)}
        aria-label="Открыть чат-помощник"
      >
        🔧
      </button>

      {open && (
        <div className="fixed bottom-36 right-4 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
          <div className="bg-[#1a2c4e] px-4 py-3 text-sm font-semibold text-white">
            Помощник АМЕТ 🔧
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto bg-gray-50 p-3">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-lg p-3 text-sm ${
                  message.role === "assistant"
                    ? "bg-white text-text"
                    : "ml-8 bg-[#1a2c4e] text-white"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="space-y-2 border-t border-gray-200 p-3">
            <div className="flex flex-wrap gap-2">
              {quickActions.map((label) => (
                <button
                  key={label}
                  type="button"
                  className="rounded-md border border-gray-200 px-2 py-1 text-xs"
                  onClick={() => sendMessage(label)}
                >
                  {label}
                </button>
              ))}
            </div>
            <form
              className="flex gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                void sendMessage(input);
              }}
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ваш вопрос..."
                className="h-10 flex-1 rounded-lg border border-gray-200 px-3 text-sm focus:border-[#f97316] focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-[#f97316] px-3 text-sm font-semibold text-white hover:bg-[#ea6c0a]"
              >
                {loading ? "..." : "Отправить"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
