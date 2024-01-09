import Link from "next/link";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full h-20 bg-gradient">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href="/">Next.js</Link>
        <ul className="flex items-center">
          <li className="mr-4">
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
