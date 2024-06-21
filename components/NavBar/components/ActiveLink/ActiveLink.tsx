'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

import styles from './ActiveLink.module.css';

interface ActiveLinkProps {
  path: string;
  text: string;
}
 
const ActiveLink: FunctionComponent<ActiveLinkProps> = ({ path, text }) => {

  const pathname = usePathname();

  return (
    <Link
      className={`${styles.link} ${pathname === path ? styles['active-link'] : ''}`}
      href={path}
    >
      {text}
    </Link>
  );
}
 
export default ActiveLink;