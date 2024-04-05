import ServicesCard from "./Adventures/ServicesCard";

async function getData() {
  const res = await fetch("http://localhost:1337/api/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function Adventures() {
  const category = await getData();
  return (
    <div>
      <div id="adventures" className=" py-16 text-black">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold ">Choose Your Adventure</h2>
          </div>

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-2 mx-auto flex  flex-wrap  -m-4">
              {category.data.map((data, index) => (
                <div key={index} className="p-4 md:w-1/3">
                  <ServicesCard data={data.attributes} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Adventures;
