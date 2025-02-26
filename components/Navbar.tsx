"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SignedIn, SignedOut, SignOutButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }
  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent transition-all duration-300">
      <div className="max-w-9xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Website Name */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/nutrify.svg"
            width={50}
            height={50}
            alt="Nutrify Logo"
            className="hover:scale-105 transition-transform duration-200"
          />
          <span
            className="text-2xl font-extrabold font-[signature] text-yellow-400"
            style={{
              fontFamily: "'Sacramento', cursive",
              // Enhanced tilt for handwriting vibe
            }}
          >
            Nutrify
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <SignedIn>
            <Link
              href="/mealplan"
              className="relative text-gray-700 tracking-wide hover:text-emerald-600 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-emerald-600 after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
            >
              Meal Plan
            </Link>
            {user?.imageUrl ? (
              <Link href="/profile" className="group">
                <Image
                  src={user.imageUrl}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-emerald-200 group-hover:border-emerald-600 transition-all duration-300"
                />
              </Link>
            ) : (
              <div className="w-10 h-10 bg-emerald-100 rounded-full animate-pulse"></div>
            )}
            <SignOutButton>
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                }}
                className="bg-emerald-500 text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg hover:bg-emerald-600 transition-all duration-300 flex items-center"
              >
                Sign Out
              </motion.button>
            </SignOutButton>
          </SignedIn>
          <SignedOut>
            <Link
              href="/"
              className="relative text-gray-700 font-semibold hover:text-emerald-600 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-emerald-600 after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <Link
              href={isSignedIn ? "/payment" : "/signup"}
              className="relative text-gray-700 font-semibold hover:text-emerald-600 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-emerald-600 after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
            >
              Subscribe
            </Link>

            <Link
              href="/signup"
              className="px-5 py-2 bg-transparent  border-2 border-emerald-600 text-emerald-600 text-sm font-bold rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-300"
            >
              Sign Up
            </Link>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
