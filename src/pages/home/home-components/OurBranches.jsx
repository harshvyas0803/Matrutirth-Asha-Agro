import react from "react";

const Branches = () => {
    return (
        <>
            <div className="branch">
                <h1 className="text-3xl font-bold text-center">Our Branches</h1>

                <div className="flex flex-col md:flex-row justify-center p-3 md:ml-10 mt-7 gap-12">
                    <div className="border border-gray-300 bg-amber-100 rounded-lg shadow-lg p-5 w-full md:w-[750px] text-center">
                        <img
                            src="/assets/Branch1.jpeg"
                            alt="Branches"
                            className="shadow-md w-full h-[300px] md:h-[600px] rounded-lg object-cover"
                        />
                        <h1 className="mt-6 text-2xl md:text-3xl font-bold">Sindkhed Raja</h1>
                    </div>

                    <div className="border border-gray-300 bg-amber-100 rounded-lg shadow-lg p-5 w-full md:w-[750px] text-center">
                        <img
                            src="/assets/Branch2.jpeg"
                            alt="Branches"
                            className="shadow-md w-full h-[300px] md:h-[600px] rounded-lg object-cover"
                        />
                        <h1 className="mt-6 text-2xl md:text-3xl font-bold">Jafrabad</h1>
                    </div>

                    <div className="border border-gray-300 bg-amber-100 rounded-lg shadow-lg p-5 w-full md:w-[750px] text-center">
                        <img
                            src="/assets/Branch3.jpeg"
                            alt="Branches"
                            className="shadow-md w-full h-[300px] md:h-[600px] rounded-lg object-cover"
                        />
                        <h1 className="mt-6 text-2xl md:text-3xl font-bold">Sillod</h1>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Branches;