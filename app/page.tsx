import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <span className="text-7xl">Hola!!</span>
      <Link href="/about">About</Link>
    </main>
  );
}
