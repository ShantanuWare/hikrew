function page() {
  return (
    <div className="container my-16 mx-auto md:px-6 bg-white border rounded-lg pt-8">
      <>
        {/* Hello world */}
        <section className="mb-32">
          <div className="flex justify-center">
            <div className="text-center md:max-w-xl lg:max-w-3xl">
              <h2 className="mb-12 px-6  text-4xl font-bold text-black">
                Contact us
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="mb-12 w-full md:w-1/2 lg:w-5/12 md:px-3 lg:mb-0 lg:px-6">
              <form>
                <div className="mb-6  ">
                  <div
                    className="relative mb-6  bg-white border rounded-md"
                    data-te-input-wrapper-init=""
                  >
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 text-gray-500 "
                      id="exampleInput90"
                      placeholder="Name"
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-gray-500 dark:peer-focus:text-primary"
                      htmlFor="exampleInput90"
                    >
                      Name
                    </label>
                  </div>
                </div>
                <div className="mb-6">
                  <div
                    className="relative mb-6 bg-white border rounded-md"
                    data-te-input-wrapper-init=""
                  >
                    <input
                      type="email"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  text-gray-500 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput91"
                      placeholder="Email address"
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                      htmlFor="exampleInput91"
                    >
                      Email address
                    </label>
                  </div>
                </div>
                <div className="mb-6">
                  <div
                    className="relative mb-6  bg-white border rounded-md"
                    data-te-input-wrapper-init=""
                  >
                    <textarea
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-gray-500 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      placeholder="Your message"
                      defaultValue={""}
                    />
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                    >
                      Message
                    </label>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full py-3 text-black  border bg-blue-300 rounded-md  focus:outline-none "
                >
                  Send
                </button>
              </form>
            </div>
            <div className="w-full md:w-1/2 lg:w-7/12 lg:px-6">
              <div
                viewport={{ once: true }}
                className=" bg-white dark:bg-darkSecond text-black  border rounded-lg h-full overflow-hidden p-8 pt-0 "
                style={{ height: "100%" }}
              >
                <div className="p-4 pt-0">
                  <h2 className="text-3xl my-4  font-bold  text-black">
                    Hikrew.Com
                  </h2>
                  <h3 className="text-gray-700    mt-4 text-xl text-justify">
                    Got a question, feedback, or just want to say hello? Reach
                    out to us, and we'll get back to you as soon as we can.
                  </h3>
                  <p className="text-gray-700   mt-4 text-xl text-justify">
                    Email: hikrew763@gmail.com
                  </p>
                  <h3 className="text-gray-700  mt-4 text-xl text-justify">
                    Email: pratikhg.2001@gmail.com
                  </h3>
                  <h3 className="text-gray-700   mt-4 text-xl text-justify">
                    Instagram: @hikrew_
                  </h3>
                  <h3 className="text-gray-700  mt-4 text-xl text-justify">
                    YouTube: Hikrew
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default page;
