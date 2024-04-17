import Places from "@/components/Places";
async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/destinations?filters[Category]=Camping&populate=*`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function Camping() {
  const camping = await getData();
  return (
    <div className=" py-8 text-black font-lobster">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold ">Choose Your Destination</h2>
        </div>
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap -m-4">
            {camping.data.map((data, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <Places data={data} service={"camping"}></Places>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Camping;
