const MainAbout = () => {
  return (
    <>
      <h1 className="sm:text-5xl text-2xl font-semibold py-4 text-center mt-4 text-amber-950">
        Our Director
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 sm:mx-36 mx-10 sm:my-16  my-6">
        <div className="">
          <img
            src="./assets/aa.png"
            alt=""
            className="w-full sm:h-[670px] rounded-xl"
          />
        </div>
        <div className="bg-amber-50 sm:p-8 p-4 text-center rounded-lg">
          <h1 className="sm:text-4xl text-2xl font-semibold py-6">
            Mohan Maghade
          </h1>
          <p className="sm:text-[20px] sm:leading-relaxed">
            Mohan Magade is the Director of Agro Asha, a leading company in the
            trade, finance, and storage sectors related to farming. With a
            profound understanding of the agricultural industry, Mohan has been
            at the forefront of innovating solutions that benefit farmers and
            agribusinesses alike. Under his leadership, Agro Asha has grown into
            a trusted partner for farmers across the region, providing essential
            services that streamline the process of getting farm products to
            market. His strategic initiatives in finance have empowered many
            small and medium-sized farms to access the capital they need to
            grow. Mohan's vision extends beyond just business; he is committed
            to enhancing the storage capabilities of Agro Asha, ensuring that
            farm produce remains fresh and marketable for longer periods. His
            dedication to the agricultural sector has positioned Agro Asha as a
            key player in driving growth and sustainability in farming.
          </p>
        </div>
      </div>
      <h1 className="sm:text-5xl text-2xl font-semibold py-4 text-center mt-4 text-amber-950 sm:mx-36 mx-10 sm:my-16  my-6">
        Some Photos Of Our Warehouse
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 sm:mx-36 mx-10 sm:my-16 my-6">
        <img src="./assets/w1.jpg" alt="" className="rounded-md" />
        <img src="./assets/w3.jpg" alt="" className="rounded-md" />
        <img src="./assets/w4.jpg" alt="" className="rounded-md" />
        <img src="./assets/w5.jpg" alt="" className="rounded-md" />
      </div>
    </>
  );
};

export default MainAbout;
