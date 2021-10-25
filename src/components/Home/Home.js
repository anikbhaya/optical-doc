import React, { useEffect, useState } from 'react';
import useServices from '../../hooks/useServices';
import './Home.css'
import Service from './Service/Service';

const Home = () => {
    const [services] = useServices()



    return (
        <div>
            <div className="showcase relative" >
                <img id="banner" width="100%" className="h-80" src="./images/banner.jpg" alt="" />
                <div className="container">
                    <div id="search" className="">
                        <h1 className=" text-xl lg:text-5xl mb-8 text-center font-bold text-white">Your <span className="text-primary">Vision</span> Is Our Mission.</h1>
                        <div className="flex justify-center">
                            <input type="search" className="px-6 py-1 h-12 w-44 lg:w-96 text-gray-900 rounded-full focus:outline-none"
                                placeholder="search" x-model="search" />
                            <button type="submit" className="flex items-center text-white px-6 py-1 bg-primary h-12 rounded-full relative right-10">
                                Search on site
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div id="services">
                <div className="container mx-auto px-4 my-10 ">
                    <h2 className="text-3xl font-bold text-center mb-2">Our <span className="text-primary">Services</span></h2>
                    <p className="text-center w-full lg:w-3/4 mx-auto">Primary eye care services include: Educating patients about maintaining and promoting healthy vision.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
                        {
                            services.services && services.services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div>
            </div>

            <div id="goal" className="py-14 block bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="lg:flex items-center">
                        <div className="mb-5 lg:mb-0">
                            <img width="100%"  src="/images/blog-01.jpg" alt="" />
                        </div>
                        <div className="ml-8">
                            <h2 className="text-3xl font-medium ">We Care For Your <span className="text-primary">Vision.</span></h2>
                            <hr className="border-2 border-primary w-20 my-3" />
                            <p>We believe that everyone deserves to see the world clearly. That’s why we’ve made it our mission to provide patients with the best eye doctors, the most thorough an eye’s health exams, and a wide selection of eyewear delivered with the personal attention you deserve.</p>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
                                <div>
                                    <h5 className="text-2xl font-medium mb-2"><i className="far fa-check-square text-primary"></i> We’re Certified</h5>
                                    <p>Certified by Government for excellence in Ophthalmic Technology</p>
                                </div>
                                <div>
                                    <h5 className="text-2xl font-medium mb-2"><i className="far fa-check-square text-primary"></i> 20 Years Of Experience</h5>
                                    <p>Community health and vision care to the area for over 20 years</p>
                                </div>
                                <div>
                                    <h5 className="text-2xl font-medium mb-2"><i className="far fa-check-square text-primary"></i> Expert Doctors</h5>
                                    <p>You will be treated with the most friendly & compassionate care</p>
                                </div>
                                <div>
                                    <h5 className="text-2xl font-medium mb-2"><i className="far fa-check-square text-primary"></i> Excellent Services</h5>
                                    <p>Today, we fit into the perfect frame of services for everyone</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonials">
                <div className="container mx-auto py-14 px-4">
                    <div>
                    <h2 className="text-3xl font-bold mb-2 text-center">Hear From Our  <span className="text-primary">Customers.</span></h2>
                        <p className=" xl:w-3/4 w-11/12 mx-auto xl:mx-0 text-center sm:text-left">Check what our customer say about us after receiving services from us.</p>
                    </div>
                    <section className="mt-6">
                        <figure className="visible">
                            <div className="flex flex-wrap justify-around">
                                <div className="xl:w-1/3 lg:w-5/12 w-11/12 sm:w-3/5 md:w-5/12 xl:pb-0 pb-12">
                                    <div className="shadow-lg mx-3 xl:mx-3 sm:mx-0 lg:mx-0 rounded">
                                        <div className="bg-primary pt-6 pb-6 pl-6 rounded-tl rounded-tr">
                                            <h1 className="text-xl text-white pb-1">Alex Parkinson</h1>
                                            <p className="text-sm text-white">AlphaSquad LLC</p>
                                        </div>
                                        <div className="pl-6 pr-6 pt-10 relative h-64">
                                            <div className="h-16 w-16 rounded-full bg-cover border-4 border-white absolute top-0 right-0 -mt-8 mr-6">
                                                <img src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif" alt="Display Avatar of Alex Parkinson" role="img" className="h-full w-full object-cover rounded-full overflow-hidden" />
                                            </div>

                                            <p className="text-base text-gray-600 leading-8">I can’t say enough about my experience here! Top notch– they go above and beyond to assist you, great customer service and answered all my questions!</p>
                                            <div className="flex justify-end mt-2">
                                                <svg width="44" height="37" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.432 0c-2.339 0-4.329.821-5.97 2.463C.82 4.105 0 6.093 0 8.429c0 2.335.82 4.324 2.462 5.966 1.641 1.642 3.631 2.463 5.97 2.463 2.113 0 3.386.84 3.82 2.518.434 1.678.217 3.54-.65 5.583-.868 2.043-2.32 3.904-4.358 5.582C5.206 32.22 2.792 33.06 0 33.06V37c5.018 0 9.196-1.925 12.535-5.774 3.34-3.85 5.518-8.083 6.537-12.699 1.018-4.616.726-8.857-.878-12.725C16.591 1.934 13.337 0 8.432 0zm24.335 0c-2.34 0-4.33.821-5.97 2.463-1.642 1.642-2.462 3.63-2.462 5.966 0 2.335.82 4.324 2.462 5.966 1.64 1.642 3.63 2.463 5.97 2.463 2.113 0 3.396.84 3.848 2.518.453 1.678.236 3.54-.65 5.583-.887 2.043-2.34 3.904-4.358 5.582-2.019 1.679-4.443 2.518-7.272 2.518V37c5.018 0 9.196-1.925 12.535-5.774 3.339-3.85 5.518-8.083 6.536-12.699 1.02-4.616.727-8.857-.877-12.725C40.926 1.934 37.672 0 32.767 0z"
                                                        fill="#667EEA"
                                                        fillRule="evenodd"
                                                        fillOpacity=".15"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:w-1/3 lg:w-5/12 w-11/12 sm:w-3/5 md:w-5/12 xl:mb-0 mb-12">
                                    <div className="shadow-lg mx-3 xl:mx-3 sm:mx-0 lg:mx-0 rounded">
                                        <div className="bg-primary pt-6 pb-6 pl-6 rounded-tl rounded-tr">
                                            <h1 className="text-xl text-white pb-1">Ashley Wilson</h1>
                                            <p className="text-sm text-white">i-Intellect Inc</p>
                                        </div>
                                        <div className="pl-6 pr-6 pt-10 relative h-64">
                                            <div className="h-16 w-16 rounded-full bg-cover border-4 border-white absolute top-0 right-0 -mt-8 mr-6">
                                                <img src="https://cdn.tuk.dev/assets/photo-1548958921-c5c0fe1b307d.jfif" alt="Display Avatar of Ashley Wilson" role="img" className="h-full w-full object-cover rounded-full overflow-hidden" />
                                            </div>

                                            <p className="text-base text-gray-600 leading-8">Staff was nice and so helpful. I was called in right on time no waiting. I had a good experience
                                                and now my daughter is going to make an appointment.</p>
                                            <div className="flex justify-end mt-2">
                                                <svg width="44" height="37" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.432 0c-2.339 0-4.329.821-5.97 2.463C.82 4.105 0 6.093 0 8.429c0 2.335.82 4.324 2.462 5.966 1.641 1.642 3.631 2.463 5.97 2.463 2.113 0 3.386.84 3.82 2.518.434 1.678.217 3.54-.65 5.583-.868 2.043-2.32 3.904-4.358 5.582C5.206 32.22 2.792 33.06 0 33.06V37c5.018 0 9.196-1.925 12.535-5.774 3.34-3.85 5.518-8.083 6.537-12.699 1.018-4.616.726-8.857-.878-12.725C16.591 1.934 13.337 0 8.432 0zm24.335 0c-2.34 0-4.33.821-5.97 2.463-1.642 1.642-2.462 3.63-2.462 5.966 0 2.335.82 4.324 2.462 5.966 1.64 1.642 3.63 2.463 5.97 2.463 2.113 0 3.396.84 3.848 2.518.453 1.678.236 3.54-.65 5.583-.887 2.043-2.34 3.904-4.358 5.582-2.019 1.679-4.443 2.518-7.272 2.518V37c5.018 0 9.196-1.925 12.535-5.774 3.339-3.85 5.518-8.083 6.536-12.699 1.02-4.616.727-8.857-.877-12.725C40.926 1.934 37.672 0 32.767 0z"
                                                        fill="#667EEA"
                                                        fillRule="evenodd"
                                                        fillOpacity=".15"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:w-1/3 lg:w-5/12 w-11/12 sm:w-3/5 md:w-5/12 xl:mb-0 mb-12">
                                    <div className="shadow-lg mx-3 xl:mx-3 sm:mx-0 lg:mx-0 rounded">
                                        <div className="bg-primary pt-6 pb-6 pl-6 rounded-tl rounded-tr">
                                            <h1 className="text-xl text-white pb-1">Richard Clark</h1>
                                            <p className="text-sm text-white">Apple Inc</p>
                                        </div>
                                        <div className="pl-6 pr-6 pt-10 relative h-64">
                                            <div className="h-16 w-16 rounded-full bg-cover border-4 border-white absolute top-0 right-0 -mt-8 mr-6">
                                                <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt="Display Avatar of Richard Clark" role="img" className="h-full w-full object-cover rounded-full overflow-hidden" />
                                            </div>

                                            <p className="text-base text-gray-600 leading-8">Service was exceptional, fast, and informative. Great vibe right when you walk in. I highly recommend Vision Pro Optical!</p>
                                            <div className="flex justify-end mt-2">
                                                <svg width="44" height="37" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.432 0c-2.339 0-4.329.821-5.97 2.463C.82 4.105 0 6.093 0 8.429c0 2.335.82 4.324 2.462 5.966 1.641 1.642 3.631 2.463 5.97 2.463 2.113 0 3.386.84 3.82 2.518.434 1.678.217 3.54-.65 5.583-.868 2.043-2.32 3.904-4.358 5.582C5.206 32.22 2.792 33.06 0 33.06V37c5.018 0 9.196-1.925 12.535-5.774 3.34-3.85 5.518-8.083 6.537-12.699 1.018-4.616.726-8.857-.878-12.725C16.591 1.934 13.337 0 8.432 0zm24.335 0c-2.34 0-4.33.821-5.97 2.463-1.642 1.642-2.462 3.63-2.462 5.966 0 2.335.82 4.324 2.462 5.966 1.64 1.642 3.63 2.463 5.97 2.463 2.113 0 3.396.84 3.848 2.518.453 1.678.236 3.54-.65 5.583-.887 2.043-2.34 3.904-4.358 5.582-2.019 1.679-4.443 2.518-7.272 2.518V37c5.018 0 9.196-1.925 12.535-5.774 3.339-3.85 5.518-8.083 6.536-12.699 1.02-4.616.727-8.857-.877-12.725C40.926 1.934 37.672 0 32.767 0z"
                                                        fill="#667EEA"
                                                        fillRule="evenodd"
                                                        fillOpacity=".15"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </figure>


                    </section>

                </div>
            </div>
        </div>
    );
};

export default Home;