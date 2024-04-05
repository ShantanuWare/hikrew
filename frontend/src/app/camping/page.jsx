import Places from "@/components/Places";
async function getData() {
  const res = await fetch("http://localhost:1337/api/destinations");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function Camping() {
  const destination = await getData();
  return (
    <div className=" py-8 text-black font-lobster">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold ">Choose Your Destination</h2>
        </div>
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Places service={"camping"}></Places>
            <Places service={"camping"}></Places>
            <Places service={"camping"}></Places>
            <Places service={"camping"}></Places>
            <Places service={"camping"}></Places>
            <Places service={"camping"}></Places>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Camping;
