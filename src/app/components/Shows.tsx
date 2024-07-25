import { shows } from "../constants/constants";
import ShowItem from "./ShowItem";

export default function Shows() {
  return (
    <section className="h-screen pt-[150px] flex flex-col gap-[40px]">
      <h2 className="text-2xl font-semibold uppercase">Upcoming Shows</h2>
      {shows.map((show) => (
        <ShowItem
          key={show.id}
          date={show.date}
          venue={show.venue}
          location={show.location}
          country={show.country}
          tickets={show.ticketLink}
        />
      ))}
      <p>More to be announced....</p>
    </section>
  );
}
