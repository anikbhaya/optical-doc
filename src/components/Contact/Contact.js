import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="bg-primary py-4">
                <div className="container mx-auto p-4">
                    <h2 className="text-3xl font-bold text-center text-white">Contact Us</h2>


                </div>
            </div>
            <div className="container mx-auto p-4">
                <div className="flex my-10">
                    <div className="w-3/5">
                        <h2 className="text-3xl font-bold ">Have Queries Before <br /> The <span className="text-primary">Appointment?</span></h2>
                        <hr className="border-2 border-primary w-20 my-3" />

                        <div className="flex items-center my-6">
                            <i class="fas w-14 fa-envelope-open-text text-5xl text-primary"></i>
                            <div className="ml-4">
                                <p className="text-2xl font-medium">Let's Talk</p>
                                <p><span className="font-bold">Phone:</span> +123 45 678</p>
                                <p><span className="font-bold">Email:</span> info@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center my-6">
                            <i class="fas w-14 fa-phone-volume text-5xl text-primary"></i>
                            <div className="ml-4">
                                <p className="text-2xl font-medium">Our Timing</p>
                                <p><span className="font-bold">Mon-Fri: </span> 9:00 am to 6:00 pm</p>
                                <p><span className="font-bold">Sat:</span> 9:00 am to 2:00 pm</p>
                                <p><span className="font-bold">Sunday:</span> Closed</p>
                            </div>
                        </div>

                        <div className="flex items-center my-6">
                            <i class="fas fa-map-marked-alt text-5xl text-primary"></i>
                            <div className="ml-4">
                                <p className="text-2xl font-medium">Our Address</p>
                                <p>2274 Marion De Street,</p>
                                <p>New York, 123 US</p>

                            </div>
                        </div>

                    </div>
                    <div className="bg-gray-100 p-8 w-full">
                        <h2 className="text-3xl font-medium text-center mb-3">Write Your <span className="text-primary">Queries</span></h2>

                        <div className="grid gap-4">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Your Name" />
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Your Email" />
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Your Phone Number" />
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Subject" />
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="" id="" cols="30" rows="10"></textarea>
                            <input type="submit" value="Send" className=" bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer mx-auto " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;