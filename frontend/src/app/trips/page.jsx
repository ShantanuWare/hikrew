import TripCard from "@/components/TripCard";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/trips?populate=*`,

    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.data;
}

async function TripDetails(props) {
  const data = await getData();
  return (
    <div className="py-8 text-black font-lobster">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">All Trips</h2>
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

export default TripDetails;
