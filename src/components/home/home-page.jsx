import Link from "next/link";
import Image from "next/image";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const HomePage = ({ data }) => (
  <div className={`${inter.className} home_body`}>
    {data.map((ev) => (
      <Link className="card" key={ev.id} passHref href={`/events/${ev.id}`}>
        <div className="image">
          <Image alt={ev.title} width={300} height={300} src={ev.image} />
        </div>

        <div className="content">
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </div>
      </Link>
    ))}
  </div>
);
