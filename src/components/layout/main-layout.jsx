import React from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/foooter";
import localFont from "next/font/local";

const inter = localFont({
  src: "../../../fonts/Inter-VariableFont_slnt,wght.ttf",
});
const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={inter.className}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
