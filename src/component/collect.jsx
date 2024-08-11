import React from "react";

function Collect() {
    return (
        <>
            {/* component */}
            <div className=" flex-wrap bg-gradient-to-bl border 2 border-blue-900 bg-black flex items-center justify-center p-10">
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                        {/* Replace this with your grid items */}
                        <div className="bg-gray-950 rounded-lg border p-4">
                            <img src="https://th.bing.com/th/id/R.a6f2e3d9c5ca870c2581adf87b3399ce?rik=7YXDUAbEAy8xKg&riu=http%3a%2f%2fncat.co.in%2fimages%2fncat_logo.jpg&ehk=db1z8VwsorRCA9wbpapE4rP%2fFWgXiaA7VjVd80M6O1c%3d&risl=&pid=ImgRaw&r=0" alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
                            <div className="px-1 py-4">
                                <div className="font-bold text-yellow-200 text-xl mb-2">NCAT</div>
                                <p className="text-white text-base">
                                National Creativity Aptitude Test.
                                </p>
                            </div>
                            <div className="px-1 py-4">
                            
                            </div>
                        </div>
                        <div className="bg-gray-950 rounded-lg border p-4">
                            <img src="https://www.successcds.net/images/NPTEL.jpg" alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
                            <div className="px-1 py-4">
                                <div className="font-bold text-yellow-200 text-xl mb-2">NPTEL</div>
                                <p className="text-white text-base">
                                Data Analytics with Python
                                </p>
                            </div>
                            <div className="px-1 py-4">
                                
                            </div>
                        </div>
                        <div className="bg-gray-950 rounded-lg border p-4">
                            <img src="https://www.successcds.net/images/NPTEL.jpg" alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
                            <div className="px-1 py-4">
                                <div className="font-bold text-yellow-200 bold text-xl mb-2">NPTEL</div>
                                <p className="text-white text-base">
                                Introduction To Internet Of Things
                                </p>
                            </div>
                            <div className="px-1 py-4">
                         
                            </div>
                        </div>
                        <div className="bg-gray-950 rounded-lg border p-4">
                            <img src="https://liet.in/ICSCAI/img2/new_bann-mob-2.webp" alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
                            <div className="px-1 py-4">
                                <div className="font-bold text-xl text-yellow-200 mb-2">ICSCAI-2024</div>
                                <p className="text-white text-base">
                                   Reseach Paper presentation at International Conference on Sustainable Computing and Integrated Communication in Changing Landscape of AI </p>
                            </div>
                            <div className="px-1 py-4">
                               
                            </div>
                        </div>
                        {/* Add more items as needed */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Collect;
