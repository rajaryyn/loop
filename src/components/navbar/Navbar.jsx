"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import CartCard from "../Carttotals/CartCard";

export default function Navbar() {
  // navscroll logicccccc starts
  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  // navscroll logicccccc ends

  return (
    <>
      <header
        className={
          !navState
            ? "absolute top-0  left-0  right-0 h-16 blur-effect-theme flex items-center justify-center "
            : "fixed top-0 left-0 right-0 h-16 flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
        }
      >
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center mt-2">
            <Link href="/">
              <Image src="/logo1.png" alt="logo" width={75} height={5} />
            </Link>
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="flex items-center">
              <MagnifyingGlassIcon className="icon-style" />
            </li>
            <li className="flex items-center ">
              <Link href="/checkout">
                <CartCard />
              </Link>
            </li>
            <li className="flex items-center ">
              {/* <Link href="/login">
              <button>login</button>
            </Link> */}
            </li>
            <li></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
