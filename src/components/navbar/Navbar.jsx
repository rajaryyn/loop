"use client"
import React, { useState, useEffect} from 'react'
import Image from 'next/image';
import {
   MagnifyingGlassIcon,
   ShoppingCartIcon,
 } from "@heroicons/react/24/outline";
import { Button } from "@mui/material";
import { useDispatch } from 'react-redux';
import { setOpenCart } from '@/redux/features/CartSlice';
import Cart from '../cart/Cart';
import Link from 'next/link';
import Location from '../location/Location';


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
   
  // reduux starts for cart open function
  const dispatch = useDispatch();


  const onCarttoggle = () =>{
    dispatch(setOpenCart({
      cartState: true,
    }))
  }






  return (
    <>
    <Cart />
      <header className={
        !navState
          ? "fixed -top-1 left-0 right-0 opacity-100 z-200 flex items-center justify-center"
          : "fixed -top-1 left-0 right-0 h-16 flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
      }>
         <nav className='flex items-center justify-between nike-container'>
            <div className='flex items-center'>
              <Link href='./'>
               <Image src="/logo1.png" alt="logo" width={75} height={5}  />
              </Link>
              <Location />
            </div>
            <ul className='flex items-center justify-center gap-2'>
               <li className='grid items-center'><MagnifyingGlassIcon className='icon-style' /></li>
               <li className='grid items-center'><Link href='/checkout'>
               <button
            
              type="button"
              className="border-none outline-none active:scale-110 transition-all duration-300 relative"
            
              
            ><ShoppingCartIcon className='icon-style' /></button></Link> </li>
               <li className='grid items-center'><Link href='/login'> <Button>Login</Button></Link></li>
            </ul>
         </nav>
      </header>
    </>
  )
}
