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
    <section className="pb-10 pt-8" aria-labelledby="mind-heading">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-bar px-5 py-6 sm:px-6 sm:py-7"
          >
            <label
              id="mind-heading"
              htmlFor="mind-input"
              className="block text-lg font-medium text-pearl sm:text-xl"
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
              className="input-field mt-4 resize-y border-transparent bg-deep/35"
            />
            <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-[#D8E8E6]">
                Your words stay in this browser session for now.
              </p>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
