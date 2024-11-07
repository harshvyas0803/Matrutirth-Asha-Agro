import React from "react";
import Card from "../../../components/Card";

const WhoWeServe = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center sm:mx-28 mx-10 animate__animated animate__fadeIn animate__delay-1s">
        Who We Serve
      </h1>
      <h1 className="text-[28px] font-bold text-center text-gray-700 sm:mx-28 mx-10 animate__animated animate__fadeIn animate__delay-1.5s">
        We have something in store for all
      </h1>
      <h1 className="sm:mx-28 mx-10 mt-6 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 animate__animated animate__fadeIn animate__delay-2s">
        Farmers and FPOs
      </h1>
      
      {/* Cards Section */}
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 sm:mx-28 mx-10 mt-6">
        <Card
          image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc3d5688.webp"
          title="E-Auctions"
          description="Need to buy or sell stock immediately? Easily participate in e-auctions or create.."
        />
        <Card
          image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc3975a1.webp"
          title="Loan Against Commodity"
          description="Our loan against commodity services is gaining popularity in the market .."
        />
        <Card
          image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc378bfa.webp"
          title="Find Warehouses"
          description="Choose from a range of options, filters and features, a warehouse that fits your needs and size."
        />
        <Card
          image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc34b51b.webp"
          title="Find Buyers and Sellers"
          description="With a network of 650,000 farmers from over 600 Farmer Producer Organisations (FPOs) and more than 10,000 o.."
        />
      </div>
      
      {/* Processors Section */}
      <h1 className="sm:mx-28 mx-10 mt-6 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 animate__animated animate__fadeIn animate__delay-3s">
        Processors
      </h1>
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 sm:mx-28 mx-10 mt-6">
        <Card
          image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc3d5688.webp"
          title="E-Auctions"
          description="Need to buy or sell stock immediately? Easily participate in e-auctions or create.."
        />
        <Card
          image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc3975a1.webp"
          title="Loan Against Commodity"
          description="Our loan against commodity services is gaining popularity in the market .."
        />
        <Card
          image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc378bfa.webp"
          title="Find Warehouses"
          description="Choose from a range of options, filters and features, a warehouse that fits your needs and size."
        />
        <Card
          image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc34b51b.webp"
          title="Find Buyers and Sellers"
          description="With a network of 650,000 farmers from over 600 Farmer Producer Organisations (FPOs) and more than 10,000 o.."
        />
      </div>

      {/* Corporate Section */}
      <h1 className="sm:mx-28 mx-10 mt-6 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 animate__animated animate__fadeIn animate__delay-4s">
        Corporate
      </h1>
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 sm:mx-28 mx-10 mt-6">
        <Card
          image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc3d5688.webp"
          title="E-Auctions"
          description="Need to buy or sell stock immediately? Easily participate in e-auctions or create.."
        />
        <Card
          image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc3975a1.webp"
          title="Loan Against Commodity"
          description="Our loan against commodity services is gaining popularity in the market .."
        />
        <Card
          image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc378bfa.webp"
          title="Find Warehouses"
          description="Choose from a range of options, filters and features, a warehouse that fits your needs and size."
        />
        <Card
          image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc34b51b.webp"
          title="Find Buyers and Sellers"
          description="With a network of 650,000 farmers from over 600 Farmer Producer Organisations (FPOs) and more than 10,000 o.."
        />
      </div>

      {/* Traders Section */}
      <h1 className="sm:mx-28 mx-10 mt-6 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 animate__animated animate__fadeIn animate__delay-5s">
        Traders
      </h1>
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 sm:mx-28 mx-10 mt-6">
        <Card
          image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc3d5688.webp"
          title="E-Auctions"
          description="Need to buy or sell stock immediately? Easily participate in e-auctions or create.."
        />
        <Card
          image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc3975a1.webp"
          title="Loan Against Commodity"
          description="Our loan against commodity services is gaining popularity in the market .."
        />
        <Card
          image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc378bfa.webp"
          title="Find Warehouses"
          description="Choose from a range of options, filters and features, a warehouse that fits your needs and size."
        />
        <Card
          image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc34b51b.webp"
          title="Find Buyers and Sellers"
          description="With a network of 650,000 farmers from over 600 Farmer Producer Organisations (FPOs) and more than 10,000 o.."
        />
      </div>
    </div>
  );
};

export default WhoWeServe;
