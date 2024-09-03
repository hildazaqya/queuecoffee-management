"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const QueueCreate = () => {
    const router = useRouter();
    const [coffee, setCoffee] = useState("");
    const [quantity, setQuantity] = useState(1);

    async function handleCreateQueue() {
        await fetch("https://v1.appbackend.io/v1/rows/zf5pYoG4Yhgs", {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify([{ coffee, quantity }])
        });
        router.refresh();
    }

    return (
        <div className="mt-5 flex flex-col px-8 w-full">
        <h2 className="text-xl font-semibold text-neutral">Add New Order</h2>
        <div className="flex flex-row gap-3 w-full text-base mt-2 ">
          <select value={coffee} onChange={(e) => setCoffee(e.target.value)} required className="bg-accent rounded-lg w-full shadow-md text-neutral p-2 max-w-[600px]">
            <option value="Kopi Susu D'Cream">Kopi Susu D'Cream</option>
            <option value="Cold Brew Coffee">Cold Brew Coffee</option>
            <option value="Greentea">Greentea</option>
            <option value="Americano">Americano</option>
            <option value="Latte">Latte</option>
            <option value="Cappuccino">Cappuccino</option>
          </select>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            className="max-w-[200px] p-2 bg-accent shadow-lg text-neutral rounded-lg"
          />
          <button type="submit" className="bg-[#816B6B] rounded-lg text-xl p-2 text-neutral max-w-[400px] font-semibold" onClick={handleCreateQueue}>Add to Queue</button>
        </div>
      </div>
    )
}

