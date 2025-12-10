'use client';
import React, { useState } from "react";
import TicketSection from "@/components/Home/TicketSection";

export default function HeroWithCard() {
  const [regularCount, setCount] = useState(0);
  const [vipCount, setVipCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const regularIncrement = () => setCount(prev => prev + 1);
  const regularDecrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

  const vipIncrement = () => setVipCount(prev => prev + 1);
  const vipDecrement = () => setVipCount(prev => (prev > 0 ? prev - 1 : 0));

  const otherIncrement = () => setOtherCount(prev => prev + 1);
  const otherDecrement = () => setOtherCount(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="pt-36"> {/* replaced inline style with Tailwind */}
      <div className="px-4 max-w-6xl mx-auto">
        {/* hero image */}
<div className="w-full flex justify-center bg-blue-600"style={{ backgroundImage: "url('/images/events/edo-in-eko.jpg')" }}>
  <img
    src="/images/event-ticket/flyer1.jpg"
    alt="hero"
    className="w-full h-80 sm:h-96 object-contain rounded-md"
  />
</div>

        {/* content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 mt-8">
          {/* left (event info) */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm text-gray-600">Tue 30 Sep 2025, 2:00 PM</h4>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
              Edo in Eko with MC Edo Pikin
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              Nigeria's Most Fashionable Model Season 5 — THEMED: THE FUTURISM. A runway modelling contest open to both male and female models.
              </p>
              <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis asperiores adipisci distinctio pariatur, error reiciendis at corporis vero magni! Vero culpa, ut harum amet odit voluptatum dolores libero qui quibusdam.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm">
              <div className="bg-white p-4 rounded-md shadow-sm border">
                <div className="text-gray-500">Time</div>
                <div className="mt-1">
                  Tue 30 Sep 2025
                  <div className="text-lg font-semibold">2:00 PM - 10:00 PM</div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm border">
                <div className="text-gray-500">Venue</div>
                <div className="mt-1">
                  Victoria Island, Lagos
                  <div className="text-lg font-semibold">Venue details</div>
                </div>
              </div>
            </div>
          </div>

          {/* right (ticket controls) */}
          <div className="space-y-4">
            {/* Ticket card (Regular) */}
            <div className="p-4 rounded-lg border border-gray-200 hover:bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-gray-700">Regular</div>
                <div className="text-xl font-bold">N20,000</div>
              </div>

              <div className="mt-3 sm:mt-0 flex items-center gap-3">
                <button
                  aria-label="Decrease regular"
                  onClick={regularDecrement}
                  className="w-10 h-10 flex items-center justify-center rounded-md bg-slate-200 hover:bg-slate-300"
                >
                  −
                </button>
                <div className="min-w-[36px] text-center font-semibold text-lg">{regularCount}</div>
                <button
                  aria-label="Increase regular"
                  onClick={regularIncrement}
                  className="w-10 h-10 flex items-center justify-center rounded-md bg-slate-200 hover:bg-slate-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Ticket card (VIP) */}
            <div className="p-4 rounded-lg border border-gray-200 hover:bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-gray-700">VIP</div>
                <div className="text-xl font-bold">N50,000</div>
              </div>

              <div className="mt-3 sm:mt-0 flex items-center gap-3">
                <button
                  aria-label="Decrease vip"
                  onClick={vipDecrement}
                  className="w-10 h-10 flex items-center justify-center rounded-md bg-slate-200 hover:bg-slate-300"
                >
                  −
                </button>
                <div className="min-w-[36px] text-center font-semibold text-lg">{vipCount}</div>
                <button
                  aria-label="Increase vip"
                  onClick={vipIncrement}
                  className="w-10 h-10 flex items-center justify-center rounded-md bg-slate-200 hover:bg-slate-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Ticket card (Table for 5) */}
            <div className="p-4 rounded-lg border border-gray-200 hover:bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-gray-700">Table for 5</div>
                <div className="text-xl font-bold">N100,000</div>
              </div>

              <div className="mt-3 sm:mt-0 flex items-center gap-3">
                <button
                  aria-label="Decrease table"
                  onClick={otherDecrement}
                  className="w-10 h-10 flex items-center justify-center rounded-md bg-slate-200 hover:bg-slate-300"
                >
                  −
                </button>
                <div className="min-w-[36px] text-center font-semibold text-lg">{otherCount}</div>
                <button
                  aria-label="Increase table"
                  onClick={otherIncrement}
                  className="w-10 h-10 flex items-center justify-center rounded-md bg-slate-200 hover:bg-slate-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
           <center>
              <button
                className="w-full md:w-auto block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold text-center"
                type="button"
              >
                Get Ticket
              </button>
              </center>
            </div>
          </div>
        </div>

        <TicketSection />
      </div>
    </div>
  );
}
