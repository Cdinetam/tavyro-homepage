"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { saveDraftMessage } from "@/lib/chat-session";

export default function MindInput() {
  const router = useRouter();
  const [value, setValue] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    saveDraftMessage(value);
    router.push("/chat");
  }

  return (
    <section className="relative z-10 -mt-6 pb-8" aria-labelledby="mind-heading">
      <div className="container-narrow">
        <form
          onSubmit={handleSubmit}
          className="glass-panel rounded-soft p-5 sm:p-6"
        >
          <label
            id="mind-heading"
            htmlFor="mind-input"
            className="block text-base font-medium text-pearl"
          >
            What&apos;s on your mind?
          </label>
          <textarea
            id="mind-input"
            name="message"
            rows={2}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="You don't need to find the right words. Start anywhere."
            className="input-field mt-3 resize-y"
          />
          <div className="mt-4 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-aqua/60">
              Your words stay in this browser session for now.
            </p>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Continue
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
