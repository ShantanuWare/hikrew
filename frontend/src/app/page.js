import TripCard from "@/components/TripCard";
import Adventures from "../components/Adventures";
import HeroSection from "../components/HeroSection";
async function getData(Location) {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/trips?filters[PickupLocation]=Pune&populate=*`,

    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data?.data;
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="min-h-screen bg-white font-lobster text-black">
      <main>
        <div>
          <HeroSection />
          {/* Logo cloud */}
        </div>

        {/* More main page content here... */}
        <Adventures />

        {/* trips */}
        <div className="container mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold"> Trips From Pune</h2>
          </div>
          <div className="container px-5 py-2 mx-auto">
            <div className="flex flex-wrap -m-4">
              {data?.map((data, index) => (
                <div key={index} className="p-4 md:w-1/3">
                  <TripCard data={data.attributes} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
