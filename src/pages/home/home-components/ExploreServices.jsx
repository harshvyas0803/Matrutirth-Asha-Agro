import { BadgeIndianRupee, ChartCandlestick, Container } from "lucide-react";
import React from "react";

const ExploreServices = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Explore Our Services</h1>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 sm:mx-28 mx-10 sm:my-16  my-6  ">
        <div className="min-h-9 bg-amber-50 shadow-lg">
          <div className="bg-amber-700 flex flex-row text-white text-2xl sm:text-3xl p-5 rounded-lg">
            <ChartCandlestick />
            <p className="ml-3"> Trade</p>
          </div>
          <div className="p-5 sm:text-xl">
            <ul> View & Post Trade Requirements</ul>
            <br /> <hr /> <br />
            <ul>Create & Participate in E- Auctions</ul>
          </div>
        </div>
        <div className="min-h-9 bg-amber-50 shadow-lg">
          <div className="bg-amber-700 flex flex-row text-white text-2xl sm:text-3xl p-5 rounded-lg">
            <Container />
            <p className="ml-3">Storage</p>
          </div>
          <div className="p-5 sm:text-xl">
            <ul>10K+ listings of Best Storage Locations</ul>
            <br /> <hr /> <br />
            <ul>Create arya.ag Certified E-Store</ul>
          </div>
        </div>
        <div className="min-h-9 bg-amber-50 shadow-lg">
          <div className="bg-amber-700 flex flex-row text-white text-2xl sm:text-3xl p-5 rounded-lg">
            <BadgeIndianRupee />
            <p className="ml-3">Finance</p>
          </div>
          <div className="p-5 sm:text-xl">
            <ul>Get Loan against your Commodity</ul>
            <br /> <hr /> <br />
            <ul>Make Quick, Easy and Safe Payments</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreServices;
