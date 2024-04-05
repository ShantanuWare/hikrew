import StatusTimeline from "@/components/StatusTimeline";
import Trip from "@/components/Trip";

function TripDetails() {
  const data = [
    {
      title: "Day1",
      color: "green-500",
      icon: "fas fa-check-circle",
      points: ["Point 1", "Point 2", "Point 3"],
    },
    {
      title: "Day2",
      color: "red-500",
      icon: "fas fa-times-circle",
      points: ["Point 1", "Point 2"],
    },
    {
      title: "Day3",
      color: "gray-300",
      icon: "fas fa-exclamation-circle",
      points: ["Point 1", "Point 2", "Point 3", "Point 4"],
    },
  ];
  const dosData = [
    "Do prioritize accessibility in your designs.",
    "Do test your website on multiple devices and browsers.",
    "Do use semantic HTML for better SEO and accessibility.",
    "Do keep your codebase clean and maintainable.",
    "Do regularly backup your website data.",
  ];

  const dontsData = [
    "Don't use autoplaying audio or video.",
    "Don't rely solely on color to convey information.",
    "Don't neglect mobile responsiveness.",
    "Don't use intrusive pop-ups or ads.",
    "Don't forget to optimize images and assets for the web.",
  ];
  return (
    <div className=" py-8 text-black font-lobster">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold ">Trip Details</h2>
        </div>
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 " />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative   sm:rounded-2xl h-[60vh] sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://10web-site.ai/59/wp-content/uploads/sites/62/2024/03/soroush-karimi-crjPrExvShc-unsplash_lRYSd1z9.webp"
                  alt="hero section"
                />
                <div className="absolute inset-0 mix-blend-multiply" />
              </div>
            </div>
          </div>
          <div className="  text-black  max-w-7xl  mx-auto py-6  px-4   ">
            <h1 className=" text-2xl  w-full ml-4  font-extrabold tracking-tight sm:text-3xl lg:text-4xl ">
              Sunrise trek to Kalsubai Pune,
            </h1>

            <div className="sm:flex items-end">
              <svg
                data-slot="icon"
                aria-hidden="true"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 mt-4 ml-4"
              >
                <path
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="mb-1 mx-4">Time sdfasdf</span>
              <svg
                data-slot="icon"
                aria-hidden="true"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 mt-4 ml-4"
              >
                <path
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="mb-1 mx-4">
                28 Mar, 29 Mar, 30 Mar, and more
              </span>
              <svg
                data-slot="icon"
                aria-hidden="true"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 mt-4 ml-4"
              >
                <path
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="mb-1 mx-4">Deccan Gymkhana, Maharashtra</span>
            </div>
          </div>
          <div className="  text-black  max-w-7xl  mx-auto py-2  px-8   ">
            <button
              className="bg-green-500 mx-26 hover:bg-green-600 text-white font-bold py-2 w-full h-16 rounded"
              // onClick={onClick}
            >
              Book Trip Now
            </button>
          </div>
          <div className="  text-black  max-w-7xl  mx-auto py-2  px-4   ">
            <h1 className=" text-2xl  w-full ml-4  font-extrabold tracking-tight sm:text-3xl lg:text-4xl ">
              Overview{" "}
            </h1>
            <p className="ml-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nam
              quia sequi porro aperiam possimus, molestias pariatur corporis
              illum quidem facilis ipsum unde voluptatem repellat veritatis est
              perspiciatis, ab mollitia obcaecati natus eligendi, praesentium
              in? Qui quos voluptatibus voluptate similique consequatur saepe
              explicabo eveniet. Sit alias quis sed veritatis ut illo! Dolore,
              excepturi quaerat ab dignissimos ullam sequi quam ad inventore ut
              facilis. Provident ratione quia quis illum voluptates quisquam
              numquam perferendis repellendus doloribus sapiente velit officia
              iusto aspernatur distinctio, aliquam iure, repudiandae obcaecati
              dolorem placeat nihil odio assumenda. Rerum quis atque quisquam
              deleniti expedita quos accusamus optio praesentium ut! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Pariatur, explicabo
              natus dolor ex nesciunt illum ipsam. Impedit, aperiam at tenetur
              dolor quos eius vero voluptatem, beatae asperiores incidunt
              consequuntur ea? Eos, natus? Molestias consectetur vero at
              obcaecati suscipit, dolorem aliquid aliquam iste natus vel labore
              ipsum atque laborum quaerat doloremque, voluptates totam, repellat
              nam saepe! Ad, consequuntur. Reiciendis cupiditate ratione, odit
              eligendi at excepturi quam, omnis similique ipsum magni amet
              voluptatem velit porro accusantium natus aperiam nam ab aspernatur
              quo hic sint autem. Consequuntur iste sequi non laudantium.
              Necessitatibus perferendis nesciunt sunt officia optio saepe animi
              quae maxime itaque aut?
            </p>
          </div>
          <div className="  text-black  max-w-7xl  mx-auto py-2  px-4 mt-4   ">
            <h1 className=" text-2xl  w-full ml-4  font-extrabold tracking-tight sm:text-3xl lg:text-4xl ">
              What we'll give. What we won't{" "}
            </h1>
            <div className="container mx-auto px-4 py-4">
              <div className="sm:grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-white shadow-md p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    What is included in the tour
                  </h2>
                  <ul className="list-disc pl-4">
                    {dosData.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg bg-white shadow-md p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    What is NOT included in the tour
                  </h2>
                  <ul className="list-disc pl-4">
                    {dontsData.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="  text-black  max-w-7xl  mx-auto py-2  px-4   ">
            <h1 className=" text-2xl  w-full ml-4  font-extrabold tracking-tight sm:text-3xl lg:text-4xl ">
              Itinerary{" "}
            </h1>
            <div>
              <div className="p-4 mt-4">
                <h1 className="text-4xl text-center font-semibold mb-6">
                  tour timeline
                </h1>
                <StatusTimeline data={data}></StatusTimeline>
              </div>
            </div>
          </div>
          <div className="  text-black  max-w-7xl  mx-auto py-2  px-8   ">
            <h1 className=" text-2xl  w-full ml-4  font-extrabold tracking-tight sm:text-3xl lg:text-4xl ">
              Things To Carry{" "}
            </h1>
            <div className="rounded-lg bg-white shadow-md p-4">
              <ul className="list-disc pl-4">
                {/* {dontsData.map((item, index) => (
                  ))} */}
                <li>Good Trekking shoes</li>
                <li>Good Trekking shoes</li>
                <li>Good Trekking shoes</li>
                <li>Good Trekking shoes</li>
                <li>Good Trekking shoes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripDetails;
