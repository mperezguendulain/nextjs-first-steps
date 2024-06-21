import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Page",
  description: "Here we can find the description"
}

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  )
};
