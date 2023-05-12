import localFont from "next/font/local";

const inter = localFont({
  src: "../../../fonts/Inter-VariableFont_slnt,wght.ttf",
});
export const Footer = () => (
  <footer className={inter.className}>
    <p>&copy; 2022 Time to Code - A Project in Next js</p>
  </footer>
);
