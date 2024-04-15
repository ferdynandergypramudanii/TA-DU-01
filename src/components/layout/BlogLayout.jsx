import React from "react";
import Navbar from "../Navbar";
import CardBlog from "../CardBlog";
import Footer from "../Footer";

export default function BlogLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen mt-16 sm:px-16 p-5 flex flex-col items-center">
        <h2 className="m-5 text-lg md:text-2xl font-semibold text-slate-700 text-center">
          {children}
        </h2>
        <CardBlog />
      </main>
      <Footer />
    </>
  );
}
