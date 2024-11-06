const Updates = () => {
  return (
    <div className="grid sm:grid-cols-2 sm:mx-28 mx-10 bg-gradient-to-r from-amber-700 to-amber-950 p-9 rounded-lg shadow-lg">
      <div className="col-span-1">
        <p className="sm:text-3xl text-xl text-white font-semibold">
          Get Matrutirtha Asha Agro updates on WhatsApp
        </p>
        <br />
        <p className="sm:text-xl text-[15px] text-white font-normal">
          Receive quotes, demands, supplies, bids notifications and more right
          at your fingertips.
        </p>
      </div>
      <div className="col-span-1 pt-4 sm:ml-56">
        <p className="sm:text-xl text-[15px] text-white font-normal">
          Your Contact Number
        </p>
        <input
          type="text"
          placeholder="Enter your phone number"
          className="bg-white rounded mt-2 p-3"
        />
        <button className="sm:ml-5 bg-amber-700 p-2 rounded-lg mt-2 text-white">
          Send
        </button>
      </div>
    </div>
  );
};

export default Updates;
