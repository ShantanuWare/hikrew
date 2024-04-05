import React from "react";

function HeroSection() {
  return (
    <div>
      {/* Hero card */}
      <div className="relative mt-16">
        <div className="absolute inset-x-0 bottom-0 " />
        <div className="container mx-auto sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl h-[60vh] sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={"/assets/hero1.jpg"}
                alt="hero section"
              />
              <div className="absolute inset-0 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 ">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl ">
                <span className="block text-white font-lobster">
                  Your <span className="text-red-500">Adventure</span> Starts
                  With Us!
                </span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-2xl sm:max-w-5xl text-white">
                Explore our exciting trips, trekking and camping in Maharashtra
              </p>

              {/* <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <p className="mt-6 max-w-lg mx-auto text-center text-2xl sm:max-w-5xl">
                  Hikrew is your go-to travel companion that helps you explore
                  the beauty and diversity of Maharashtra. We offer curated
                  travel packages that cater to your adventurous spirit, giving
                  you memories that will last a lifetime.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
