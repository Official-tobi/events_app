import Image from "next/image";
import Link from "next/link";
import React from "react";

const CatEvent = ({ data, pageName }) => {
  return (
    <div className="cat_events">
      <h1>Events in {pageName.charAt(0).toUpperCase() + pageName.slice(1)}</h1>

      <div className="content">
        {data.map((ev) => (
          <Link
            key={ev.id}
            className="card"
            href={`/events/${ev.city}/${ev.id}`}
            passHref
          >
            <Image src={ev.image} width={300} height={200} alt={ev.title} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatEvent;
