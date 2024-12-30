import { FileUser } from "lucide-react";
import { FolderRoot } from "lucide-react";
import { Send } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 w-screen z-40 backdrop-blur-md">
      <header className="bg-slate-800 bg-opacity-50 text-white px-4 rounded-t-2xl">
        <nav>
          <ul className="flex justify-around relative bottom-4">
            <li className="rounded-full p-4 bg-slate-800 bg-opacity-50">
              <Link href="/#home">
                <House />
              </Link>
            </li>
            <li className="rounded-full p-4 bg-slate-800 bg-opacity-50">
              <Link href="/#about">
                <CircleUserRound />
              </Link>
            </li>
            <li className="rounded-full p-4 bg-slate-800 bg-opacity-50">
              <Link href="/#experience">
                <BriefcaseBusiness />
              </Link>
            </li>
            <li className="rounded-full p-4 bg-slate-800 bg-opacity-50">
              <Link href="/#projects">
                <FolderRoot />
              </Link>
            </li>
            <li className="rounded-full p-4 bg-slate-800 bg-opacity-50">
              <Link href="/#contact">
                <Send />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export const Header = () => {
  return (
    <>
      {/* #md and wider header  */}
      <div className="sticky md:-top-10 top-0 w-screen bg-gray-900 z-50">
        <header
          className="absolute md:top-10 top-0 left-1/2 transform -translate-x-[50%] bg-gray-800 bg-opacity-60 text-white py-3 px-12
          md:w-[80%] w-full md:rounded-3xl rounded-b-3xl  z-50 backdrop-blur-md"
        >
          <div className="flex justify-center md:justify-between items-center">
            <div className="font-bold flex items-center gap-2">
              <Image src={"/images/Logo2.webp"} alt="logo" width={60} height={60} />
              <span className="text-2xl text-gray-400">LazyDev</span>
            </div>
            <nav className="items-center hidden md:flex">
              <ul className="flex lg:space-x-12 space-x-6">
                <li>
                  <Link className="hover:text-gray-400 cursor-pointer" href="/#home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-400 cursor-pointer" href="/#about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-400 cursor-pointer" href="/#experience">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-400 cursor-pointer" href="#project">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-400 cursor-pointer" href="/#contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
      {/* lower than md header  */}
      <MobNav />
    </>
  );
};
