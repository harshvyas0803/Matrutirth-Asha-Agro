import React from "react";
import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }} // Starts with opacity 0 and smaller size
      whileInView={{ opacity: 1, scale: 1 }} // Fades in and scales to normal size
      transition={{ duration: 2 }} // Slower transition duration
      viewport={{ once: true }} // Ensures animation runs only once when in view
    >
      <div className="h-full bg-white">
        <div className="mx-auto">
          <div className="flex justify-center px-6 py-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div
                className="w-full h-auto bg-white hidden lg:block lg:w-5/12 bg-cover rounded-l-2xl"
                style={{
                  backgroundImage:
                    'url("https://images.pexels.com/photos/2228306/pexels-photo-2228306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
                }}
              />
              <div className="w-full lg:w-7/12 bg-amber-100 p-5 rounded-lg lg:rounded-l-none">
                <h3 className="py-4 text-2xl text-center text-gray-800">
                  Get In Touch
                </h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-amber-100 rounded">
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-800"
                        htmlFor="firstName"
                      >
                        Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="Name"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-800"
                        htmlFor="Phone"
                      >
                        Phone
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="Phone"
                        type="number"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-800"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-800"
                        htmlFor="password"
                      >
                        Address
                      </label>
                      <textarea
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-800 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="Address"
                        type="Address"
                        placeholder="Address"
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-800"
                        htmlFor="State"
                      >
                        State
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="State"
                        type="State"
                        placeholder="State"
                      />
                    </div>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-amber-950 rounded-full hover:bg-black focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Send
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GetInTouch;
