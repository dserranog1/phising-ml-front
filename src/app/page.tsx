"use client";
import SubmitButton from "@/components/SubmitButton";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSucess] = useState(false);
  const [fail, setFail] = useState(false);

  const sendMessage = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://www.hackercoop.dev/api/boop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer HackerSummer2023",
        },
        body: JSON.stringify({
          content: `**Message from ultorw**: ${message} `,
        }),
      });
      setSucess(true);
      setMessage("");
    } catch (error) {
      setFail(true);
      console.log(error);
    } finally {
      setTimeout(() => {
        setSucess(false);
        setFail(false);
      }, 3000);
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col justify-center items-center">
      <div className="flex flex-col gap-24">
        <h1 className="text-6xl font-extrabold">Homework</h1>
        <div className="flex flex-col gap-4 text-4xl">
          <label htmlFor="message">Enter a message</label>
          <input
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name="message"
            className="p-2 text-3xl focus:outline-none text-slate-800 rounded-sm"
            type="text"
            placeholder="Hello discord!"
          />
          <SubmitButton
            disabled={!message || success || fail}
            loading={loading}
            onClick={sendMessage}
            success={success}
            fail={fail}
          />
        </div>
      </div>
      <footer className="mt-48">
        <p>
          <span className="font-light italic">github:</span>{" "}
          <a
            href="https://github.com/dserranog1"
            target="_blank"
            className="font-bold text-blue-500"
          >
            danielserranog1
          </a>
        </p>
        <p>
          <span className="font-light italic">discord</span>:{" "}
          <span className="font-bold">ultorw</span>
        </p>
      </footer>
    </main>
  );
}
