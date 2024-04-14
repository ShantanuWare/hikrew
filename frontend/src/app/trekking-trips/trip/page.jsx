import TripCard from "@/components/TripCard";

async function getData(Location) {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/trips?filters[AdventureType]=Trekking&filters[Location]=${Location}&populate=*`,

    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.data;
}

async function TrekkingTrips(props) {
  const data = await getData(props.searchParams.Location);
  return (
    <div className="py-8 text-black font-lobster">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Choose Your Trip</h2>
        </div>
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.map((data, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <TripCard data={data.attributes} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrekkingTrips;
