import { QueueCreate } from "@/components/queue.create";
import { CoffeeCard } from "@/components/queue.card";

async function getData() {
  try {
    const res = await fetch("https://v1.appbackend.io/v1/rows/zf5pYoG4Yhgs");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
export default async function Home() {
  const { data } = await getData();

  return (
    <main className="flex min-h-screen bg-accent flex-col">
      <div className="bg-primary w-full p-5">
        <h1 className="text-3xl font-semibold text-neutral ">Coffee Queue Management</h1>
      </div>
      <QueueCreate />
      <div className="flex flex-col px-8">
      <h2 className="text-xl font-semibold text-neutral mt-5">Order Queue</h2>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((queue) => {
          return (
            <CoffeeCard key={queue._id} id = {queue._id} coffee={queue.coffee} quantity={queue.quantity} />
          )
        })}
      </div>
      </div>
    </main>
  );
}
