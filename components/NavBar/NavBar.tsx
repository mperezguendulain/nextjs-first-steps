import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import ActiveLink from "./components/ActiveLink/ActiveLink";

const routes = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
]

export const NavBar = () => {
  return (
    <nav className="bg-blue-950 flex flex-row p-2">
      <Link href="/" className="flex items-center">
        <HomeIcon className="mr-2"/>
        Home
      </Link>
      <div className="flex-grow"></div>
      {routes.map(route => (
        <ActiveLink key={route.path} { ...route} />
      ))}
    </nav>
  );
}