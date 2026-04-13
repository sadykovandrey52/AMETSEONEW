"use client";

import { useState } from "react";

import { reachMetrikaGoal } from "@/lib/metrika";

export default function PriceDownloadModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  return (
    <>
      <button
        type="button"
        className="min-h-[52px] rounded-lg bg-[#f97316] px-6 text-base font-semibold text-white transition-colors hover:bg-[#ea6c0a]"
        onClick={() => setOpen(true)}
      >
        Скачать прайс PDF
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6">
            <h3 className="text-xl font-bold text-heading">Получить прайс на email</h3>
            <p className="mt-2 text-sm text-gray-600">
              Укажите email, затем скачайте актуальный PDF-прайс.
            </p>
            <form
              className="mt-4 space-y-3"
              onSubmit={(event) => {
                event.preventDefault();
                setConfirmed(true);
                reachMetrikaGoal("lead_download");
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="min-h-[52px] w-full rounded-lg border-2 border-gray-200 px-3 focus:border-[#f97316] focus:outline-none"
                placeholder="your@email.ru"
              />
              {!confirmed ? (
                <button
                  type="submit"
                  className="min-h-[52px] w-full rounded-lg bg-[#f97316] px-6 text-base font-semibold text-white transition-colors hover:bg-[#ea6c0a]"
                >
                  Подтвердить email
                </button>
              ) : (
                <a
                  href="/price-list.pdf"
                  download
                  className="flex min-h-[52px] w-full items-center justify-center rounded-lg bg-[#f97316] px-6 text-base font-semibold text-white transition-colors hover:bg-[#ea6c0a]"
                >
                  Скачать прайс
                </a>
              )}
              <button
                type="button"
                className="w-full text-sm text-gray-500 underline"
                onClick={() => {
                  setOpen(false);
                  setConfirmed(false);
                }}
              >
                Закрыть
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
