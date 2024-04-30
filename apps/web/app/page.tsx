import Image from "next/image";
import { trpc } from "./trpc/trpc";
import ClientSide from "./_components/ClientSide";

export default async function Home() {
  const { greeting } = await trpc.hello.query({
    name: "John",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {greeting}
      <ClientSide />
    </main>
  );
}
