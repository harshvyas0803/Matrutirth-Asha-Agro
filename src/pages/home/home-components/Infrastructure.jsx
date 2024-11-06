import React from "react";

const Infrastructure = () => {
    return (
        <div className="info">
            <div className="flex flex-wrap justify-center items-center p-5 bg-amber-50 shadow-lg">
                {/* <!-- Part 1: Image --> */}
                <div className="flex-1 text-center p-2">
                    <img
                        src="/assets/infra.jpeg"
                        alt="Agro Asha Infrastructure"
                        className="shadow-lg w-full h-auto" // Change here
                    />
                </div>

                {/* <!-- Part 2: Information --> */}
                <div className="bg-amber-50 p-5 lg:p-8 rounded-lg max-w-lg lg:max-w-5xl mx-auto my-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-amber-600 mb-20">Asha Agro Infrastructure</h2>
                    <p className="text-lg lg:text-xl text-gray-900 leading-relaxed mb-20">
                        <span className="font-bold">Agro Asha’s</span> infrastructure is the backbone of its mission to transform the agricultural landscape. With cutting-edge storage facilities, the company ensures that farm produce stays fresh longer, reducing spoilage and maximizing profits for farmers. Its trade network simplifies the supply chain, seamlessly connecting farmers to vast markets and ensuring efficient product distribution.
                    </p>

                    <p className="text-lg lg:text-xl text-gray-900 leading-relaxed">
                        Beyond logistics, <span className="font-bold">Agro Asha’s</span> innovative financial services provide small and medium-sized farms with the capital they need to thrive, adopt modern technologies, and scale their operations. By embracing sustainable practices and modern tools, <span className="font-bold">Agro Asha</span> is not only driving growth but also fostering resilience in the farming sector. The company’s infrastructure acts as a catalyst for regional agricultural success, delivering vital services that empower farmers, boost productivity, and ensure long-term sustainability.
                    </p>
                </div>
            </div>


            <div className="flex flex-wrap justify-center items-center p-5 bg-amber-50 shadow-lg">
                {/* <!-- Part 1: Image --> */}
                <div className="bg-amber-50 p-5 lg:p-8 rounded-lg max-w-lg lg:max-w-5xl mx-auto my-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-amber-600 mb-20">Asha Agro Stock</h2>
                    <p className="text-lg lg:text-xl text-gray-900 leading-relaxed mb-20">
                        <span className="font-bold">Asha Agro</span> Company operates within the agricultural sector, focusing on the production, distribution, and financial services for small and medium-sized farms. The company plays a crucial role in transforming the agricultural landscape by providing innovative solutions that enhance productivity and profitability for farmers. In the stock sector, <span className="font-bold">Asha Agro's </span> performance is influenced by various factors, including commodity prices, weather conditions, and government policies. Investors often view agricultural stocks as a hedge against inflation, given their resilience during economic downturns. 
                    </p>

                    <p className="text-lg lg:text-xl text-gray-900 leading-relaxed">
                    As the sector increasingly shifts towards sustainable practices and technological advancements, companies like <span className="font-bold">Asha Agro</span> that adopt innovative approaches are likely to attract greater investor interest. The future of Asha Agro Company appears promising, with opportunities for growth driven by global market dynamics, population growth, and changing dietary preferences.
                    </p>
                </div>

                {/* <!-- Part 2: Information --> */}
                <div className="flex-1 text-center p-3">
                    <img
                        src="/assets/infra-2.jpeg"
                        alt="Agro Asha Infrastructure"
                        className="shadow-lg w-full h-auto" // Change here
                    />
                </div>
                
            </div>
        </div>


    );
}

export default Infrastructure;