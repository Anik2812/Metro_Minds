import React from "react";
import { MountainIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function homepage() {
  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link to="#" className="flex items-center">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Metro Minds</span>
        </Link>
        <div className="flex items-center space-x-2">
          <Link
            to="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            Log in
          </Link>
          <Link
            to="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            Sign Up
          </Link>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center gap-6 px-4 py-12 md:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome to Acme Inc</h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Metro Mind is an innovative web application designed to tackle the issue of unequal access to urban green spaces within major cities. Through advanced analysis and visualization tools, Metro Mind provides users with valuable insights into the accessibility of green spaces, ultimately aiming to promote physical and mental well-being for all city dwellers. By leveraging publicly available open datasets, Metro Mind fosters transparency and collaboration, empowering communities to advocate for and create more inclusive and equitable urban environments.
          </p>
        </div>
        <Link
          to="#"
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        >
          Let's Get Started
        </Link>
      </main>
    </>
  );
}



export default homepage;
