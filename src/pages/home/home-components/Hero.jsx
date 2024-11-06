const Hero = () => {
  return (
    <>
      <div
        className="relative h-[550px] bg-cover bg-center chnageClass"
        // style={{
        //   backgroundImage:
        //     'url("https://images.pexels.com/photos/55766/pexels-photo-55766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        // }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <p className="sm:text-8xl text-6xl text-white font-bold text-center mx-4">
            India’s Largest Integrated Grain Commerce Platform
          </p>

          <p className="sm:text-2xl text-xl text-white font-bold mt-4 px-6 sm:px-1 text-center mx-4">
            Warehouse located at Jalna & Jafrabad
          </p>
          <button className="bg-amber-100 py-2 sm:px-20 px-4 mt-4 rounded-lg sm:text-xl text-amber-950 mx-4">
            Call Us at +91 7397986147
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
