import Image from "next/image";
import Link from "next/link";

import localFont from "next/font/local";

const inter = localFont({
  src: "../../../fonts/Inter-VariableFont_slnt,wght.ttf",
});
export const Header = () => (
  <header className={inter.className}>
    <div>
      <div className="topNav">
        <Image
          alt="logo"
          src={"/images/logo_black.png"}
          width={50}
          height={50}
        />
        <nav>
          <ul>
            <li>
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/events" passHref>
                Events
              </Link>
            </li>
            <li>
              <Link href="/about-us" passHref>
                About us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="title">consectetur adipisicing elit. Delectus, mollitia!</p>
    </div>
  </header>
);
