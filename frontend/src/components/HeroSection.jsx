import Image from "next/image";

async function getData(Slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/hero-section?populate=*`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function HeroSection() {
  const data = await getData();
  return (
    <div className="relative mt-16">
      {/* Hero card */}
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl h-[60vh] sm:overflow-hidden">
          <div className="h-full relative">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={data?.data.attributes.HeroSectionImg.data.attributes.url}
              alt="hero section"
              fill
            />
            <div className="absolute inset-0 mix-blend-multiply" />
          </div>
          <div className="absolute inset-0 flex flex-col text-center px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              <span className="block font-lobster">
                Your <span className="text-red-500">Adventure</span> Starts With
                Us!
              </span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-2xl text-white">
              Explore our exciting trips, trekking and camping in Maharashtra
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
