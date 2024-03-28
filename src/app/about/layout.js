"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Layout = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      <ul>
        {pathname !== "/about/aboutcollege" ? (
          <>
            <li>
              <Link href="/about">Go to about page</Link>
            </li>
            <li>
              <Link href="/about/aboutstudent">Go to about student</Link>
            </li>
            <li>
              <Link href="/about/aboutcollege">Go to about college</Link>
            </li>
          </>
        ) : (
          <Link href="/about">Go to about page</Link>
        )}
      </ul>
      {children}
    </>
  );
};

export default Layout;
