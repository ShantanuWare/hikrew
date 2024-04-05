import Link from "next/link";
import React from "react";

function Trip() {
  return (
    <section className="p-4 md:w-1/3">
      <Link href={``}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://10web-site.ai/59/wp-content/uploads/sites/62/2024/03/evelyn-paris-QR_vT8_hBZM-unsplash_lRYSd1z9.webp"
            alt="camping"
          ></img>
          <div className="p-6">
            <div className="flex justify-between">
              <h1 className="title-font text-lg font-medium text-gray-900 ">
                {"Sunrise trek"} to {"Kalsubai Pune"}
              </h1>
              <div>28 Mar, 7:00 PM</div>
            </div>
            <div className="flex justify-between">
              <p className="leading-relaxed mb-3">
                Deccan Gymkhana, Maharashtra
              </p>
              <div>1 Night 1 Day</div>
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
                Price ₹ <span className="text-blue-800 mx-1"> 1,349</span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default Trip;
