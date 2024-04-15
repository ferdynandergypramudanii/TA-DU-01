import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const UserLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-dvh mt-[90px] mb-[547px] px-4 sm:px-16">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default UserLayout;
