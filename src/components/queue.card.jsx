"use client";

import React from "react";
import { useRouter } from "next/navigation";

export const CoffeeCard = ({id, coffee, quantity }) => {
    const router = useRouter();

    async function handleDeleteTodo() {
        const res = await fetch("https://v1.appbackend.io/v1/rows/zf5pYoG4Yhgs", {
            method: "DELETE",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify([id])
        });
        const data = await res.json();
        router.refresh();
    }

    return (
        <div className="bg-accent text-neutral shadow-lg p-5 flex flex-col content-between justify-between gap-5">
            <div className="flex flex-col">
            <h3 className="text-xl font-semibold">{coffee}</h3>
            <h5 className="text-lg">{quantity}</h5>
            </div>
            <button className="rounded-xl p-2 text-lg bg-accept text-neutral" onClick={handleDeleteTodo}>Complete</button>
        </div>
    )
}