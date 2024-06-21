import { NavBar } from "@/components";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center">
        <h1>Hello</h1>
        {children}
      </div>
    </>
  );
}