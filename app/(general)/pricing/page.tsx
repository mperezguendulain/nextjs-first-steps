import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Here we can find the pricing information"
}

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  )
};
