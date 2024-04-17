"use client";
import { useForm } from "react-hook-form";
function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (formData) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact-uses`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: formData }),
        }
      );
      if (!response.ok) {
        throw new Error(`Error submitting form: ${response.statusText}`);
      }
      console.log("Data submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      // You can display an error message to the user here
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6  ">
          <div
            className="relative mb-6  bg-white border rounded-md"
            data-te-input-wrapper-init=""
          >
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 text-gray-500 ml-12 "
              id="Name"
              {...register("Name", { required: "Please enter your name" })}
              placeholder="Name"
            />
            {errors.Name && (
              <span className="error text-gray-400 ml-4 text-sm">
                {errors.Name.message}
              </span>
            )}
            <label
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-gray-500 dark:peer-focus:text-primary"
              htmlFor="Name"
            >
              Name :
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
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  text-gray-500 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 ml-12"
              id="Email"
              placeholder="Email address"
              {...register("Email", {
                required: "Please enter your email",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Invalid email format",
                },
              })}
            />

            <label
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
              htmlFor="Email"
            >
              Email :
            </label>
            {errors.Email && (
              <span className="error text-gray-400 text-sm ml-4">
                {errors.Email.message}
              </span>
            )}
          </div>
        </div>
        <div className="mb-6">
          <div
            className="relative mb-6  bg-white border rounded-md"
            data-te-input-wrapper-init=""
          >
            <textarea
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-gray-500 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 ml-16"
              id="Message"
              {...register("Message", {
                required: "Please enter your message",
              })}
              rows={3}
              placeholder="Your message"
              defaultValue={""}
            />
            <label
              htmlFor="Message"
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
            >
              Message:
            </label>
            {errors.Message && (
              <span className="error text-gray-400 text-sm ml-4">
                {errors.Message.message}
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 text-black  border bg-blue-300 rounded-md  focus:outline-none "
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
