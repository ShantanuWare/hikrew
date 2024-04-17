async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/about-us`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function page() {
  const data = await getData();
  return (
    <div className="container  mx-auto md:px-6 text-black">
      <div className="">
        <div className="container px-8 mx-auto py-16  sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold ">Who we are</h2>
          </div>
          <p className="text-center text-2xl">
            {data.data.attributes.WhoWeAre}
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
