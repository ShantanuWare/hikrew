import ContactForm from "@/components/ContactForm";

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
              <ContactForm></ContactForm>
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
