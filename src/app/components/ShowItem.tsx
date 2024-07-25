import { ShowItemProps } from "@/types/types";

export default function ShowItem({
  date,
  venue,
  location,
  country,
  tickets,
}: ShowItemProps) {
  return (
    <div className="flex text-xl font-thin items-center justify-between text-center">
      <p className="font-semibold basis-1/5">{date}</p>
      <p className=" basis-1/5">{venue}</p>
      <p className=" basis-1/5">{location}</p>
      <p className=" basis-1/5">{country}</p>
      <a href={tickets} className="bg-black p-4 rounded-xl">
        Tickets
      </a>
    </div>
  );
}
