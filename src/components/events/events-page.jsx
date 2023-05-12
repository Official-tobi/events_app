// import Image from "next/image";
import Link from "next/link";

const EventsPage = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((ev) => (
        <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref>
          <div className="backdrop">
            <h2>{ev.title}</h2>
            <style jsx>{`
              .backdrop {
                background-image: url("${ev.image}");
              }
            `}</style>
          </div>
          {/* <Image src={ev.image} width={300} height={200} alt={ev.title} />
            <h2>{ev.title}</h2> */}
        </Link>
      ))}
    </div>
  );
};

export default EventsPage;
