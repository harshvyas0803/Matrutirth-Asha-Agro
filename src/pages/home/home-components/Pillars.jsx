import React from "react";
import { FaSackDollar } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { LuCloudSun } from "react-icons/lu";
import { SiHomeassistantcommunitystore } from "react-icons/si";

const Pillars = () => {
    return (
        <div className="pillar">
            <h1 className="text-3xl font-bold text-center">Pillars of Asha Agro</h1>

            <div className="flex flex-wrap justify-center gap-14 mt-10">
                {/* Card 1 */}
                <div className="group relative cursor-pointer overflow-hidden bg-amber-50 rounded-2xl w-80 px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 animate-strong-breathing transition-all duration-500 hover:shadow-3xl hover:bg-orange-500">
                    <span className="absolute top-0 left-0 z-0 h-32 w-32 rounded-full bg-gradient-to-r from-purple-500 to-amber-500 opacity-75 transition-all duration-500 transform group-hover:scale-[20]"></span>
                    <div className="relative z-10 mx-auto max-w-md">
                        <span className="grid h-32 w-32 place-items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500">
                            <FaSackDollar className="h-16 w-16 text-white transition-all" />
                        </span>
                        <div className="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                            <p className="font-medium">
                                Flexible financial products tailored for small and medium-sized farms. Financial literacy programs to empower farmers in managing their finances effectively.
                            </p>
                        </div>
                        <div className="pt-6 text-lg font-semibold leading-7">
                            <p>
                                <span className="text-amber-500 transition-all duration-500 group-hover:text-white">Accessible Financing Solutions</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="group relative cursor-pointer overflow-hidden bg-amber-50 rounded-2xl w-80 px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 animate-strong-breathing transition-all duration-500 hover:shadow-3xl hover:bg-orange-500">
                    <span className="absolute top-0 left-0 z-0 h-32 w-32 rounded-full bg-gradient-to-r from-purple-500 to-amber-500 opacity-75 transition-all duration-500 transform group-hover:scale-[20]"></span>
                    <div className="relative z-10 mx-auto max-w-md">
                        <span className="grid h-32 w-32 place-items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500">
                            <VscGraph className="h-16 w-16 text-white transition-all" />
                        </span>
                        <div className="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                            <p className="font-medium">
                                Establishment of platforms that link farmers directly with consumers and businesses. Development of partnerships with local and international markets to expand reach.
                            </p>
                        </div>
                        <div className="pt-6 text-lg font-semibold leading-7">
                            <p>
                                <span className="text-amber-500 transition-all duration-500 group-hover:text-white">Market Connectivity</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group relative cursor-pointer overflow-hidden bg-amber-50 rounded-2xl w-80 px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 animate-strong-breathing transition-all duration-500 hover:shadow-3xl hover:bg-orange-500">
                    <span className="absolute top-0 left-0 z-0 h-32 w-32 rounded-full bg-gradient-to-r from-purple-500 to-amber-500 opacity-75 transition-all duration-500 transform group-hover:scale-[20]"></span>
                    <div className="relative z-10 mx-auto max-w-md">
                        <span className="grid h-32 w-32 place-items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500">
                            <LuCloudSun className="h-16 w-16 text-white transition-all" />
                        </span>
                        <div className="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                            <p className="font-medium">
                                Adoption of advanced agricultural technologies (e.g., precision farming, smart irrigation). Investment in research and development to improve crop yields and sustainability.
                            </p>
                        </div>
                        <div className="pt-6 text-lg font-semibold leading-7">
                            <p>
                                <span className="text-amber-500 transition-all duration-500 group-hover:text-white">Innovation and Technology Integration</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="group relative cursor-pointer overflow-hidden bg-amber-50 rounded-2xl w-80 px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 animate-strong-breathing transition-all duration-500 hover:shadow-3xl hover:bg-orange-500">
                    <span className="absolute top-0 left-0 z-0 h-32 w-32 rounded-full bg-gradient-to-r from-purple-500 to-amber-500 opacity-75 transition-all duration-500 transform group-hover:scale-[20]"></span>
                    <div className="relative z-10 mx-auto max-w-md">
                        <span className="grid h-32 w-32 place-items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500">
                            <SiHomeassistantcommunitystore className="h-16 w-16 text-white transition-all" />
                        </span>
                        <div className="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                            <p className="font-medium">
                                Training programs focused on modern farming techniques and best practices. Workshops and seminars on financial management, marketing, and business development.
                            </p>
                        </div>
                        <div className="pt-6 text-lg font-semibold leading-7">
                            <p>
                                <span className="text-amber-500 transition-all duration-500 group-hover:text-white">Capacity Building and Education</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Pillars;
