"use client";
import Link from "next/link";
import { formatDate, formatDuration } from "@/utils/utils";
function TripCard({ data }) {
  return (
    <section className="">
      <Link href={`/trips/${data?.Slug}`}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={
              process.env.BACKEND_URL + "" + data?.Images.data[0].attributes.url
            }
            alt="camping"
          ></img>
          <div className="p-6">
            <div className="flex justify-between">
              <h1 className="title-font text-lg font-medium text-gray-900 ">
                {data?.PickupLocation} to {data?.Location}
              </h1>
              <div>
                {formatDate(data?.Date)}, {data?.Time}
              </div>
            </div>
            <div className="flex justify-between">
              <p className="leading-relaxed mb-3">{data?.Vendor_name}</p>
              <div>{formatDuration(data?.Duration)}</div>
            </div>

            <div className="flex items-center flex-wrap ">
              <div className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                View Trip Details
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
              <span className=" inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-mm  py-1 ">
                Price ₹{" "}
                <span className="text-blue-800 mx-1"> {data?.Price}</span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default TripCard;
