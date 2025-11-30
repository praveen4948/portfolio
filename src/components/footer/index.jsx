import Link from "next/link";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8  w-screen ">
      {/* First Row - Name and Navigation */}
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-x-10 sm:space-x-0">
        {/* Left Side - Name and Description */}
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-bold">Praveen Maurya</h3>
          <p className="text-gray-400">Full Stack Developer | Designer</p>
        </div>

        {/* Right Side - Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/#home" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/#about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/#experience" className="hover:text-gray-400">
            Experience
          </Link>
          <Link href="/#project" className="hover:text-gray-400">
            Projects
          </Link>

          <Link href="/#contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>

      {/* Contact quick info */}
      <div className="container mx-auto mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-300">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Mail size={18} className="text-amber-400" />
            <a href="mailto:praveenmaurya.bst@gmail.com" className="hover:text-amber-300">
              praveenmaurya.bst@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center sm:justify-center gap-2">
            <Phone size={18} className="text-amber-400" />
            <a href="tel:+919910522955" className="hover:text-amber-300">
              +91 63871 74968
            </a>
          </div>
          <div className="flex items-center justify-center sm:justify-end gap-2">
            <MapPin size={18} className="text-amber-400" />
            <span>Sector-18 Grurgram</span>
          </div>
        </div>
      </div>

      {/* Second Row - Social Media and Copyright */}
      <div className="mt-6 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          {/* Left Side - Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/praveen-maurya-390703228/"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-gray-400"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/praveen4948"
              target="_blank"
              aria-label="GitHub"
              className="hover:text-gray-400"
            >
              <i className="fab fa-github"></i>
            </a>
            {/* <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a> */}
          </div>

          {/* Right Side - Copyright */}
          <div className="text-gray-500 text-sm text-center sm:text-right">
            &copy; {new Date().getFullYear()} Praveen Maurya. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
