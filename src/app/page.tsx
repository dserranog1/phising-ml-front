"use client";
import SubmitButton from "@/components/SubmitButton";
import { useState } from "react";

export default function Home() {
  const [url, setURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSucess] = useState(false);
  const [fail, setFail] = useState(false);

  const sendurl = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8000/api/predict/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
        }),
      });
      if (res.status >= 400) {
        const err = await res.text()
        if (err.startsWith('Invalid URL')) {
          //toggle error board
      }
      } else if (res.status == 200) {
        // toggle success board
        setSucess(true);
      } else {
        //TODO: handle this case
        console.log("Unknown response", res.status);
      }
    } catch (error) {
      // toggle unknown error
      console.log(error);
    } finally {
      setURL("");
      setLoading(false)
    }
  };

  return (
    <main className="flex min-h-screen flex-col justify-center items-center">
      <div className="flex flex-col gap-24">
        <h1 className="text-6xl font-extrabold">Is it phishing or legit?</h1>
        <div className="flex flex-col gap-4 text-4xl">
          <label htmlFor="url">Enter a valid URL to find out</label>
          <input
            value={url}
            onChange={(e) => {
              setURL(e.target.value);
            }}
            name="url"
            className="p-2 text-3xl focus:outline-none text-slate-800 rounded-sm"
            type="text"
            placeholder="https://google.com"
          />
          <SubmitButton
            loading={loading}
            onClick={sendurl}
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
      </footer>
    </main>
  );
}
