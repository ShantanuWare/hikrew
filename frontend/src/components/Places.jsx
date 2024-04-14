import Link from "next/link";

function Places({ data, service }) {
  return (
    <section className="">
      <Link href={`${service}/trip?Location=${data?.attributes?.Location}`}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={data?.attributes.Thumbnail.data.attributes.url}
            alt="camping"
          ></img>
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {data?.attributes?.Location}
            </h1>
            <p className="leading-relaxed mb-3">
              {data?.attributes?.Discription}
            </p>
            <div className="flex items-center flex-wrap ">
              <div className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                View All Trips
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                50
              </span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default Places;
