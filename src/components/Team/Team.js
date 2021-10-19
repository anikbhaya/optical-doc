import React from 'react';

const Team = () => {
    return (
        <div>
            <div className="bg-primary py-4">
                <div className="container mx-auto p-4">
                    <h2 className="text-3xl font-bold text-center text-white">Our Team</h2>
                    <hr className="border-2 border-white w-20 my-3 mx-auto" />
                    <p className="text-white text-center">Our goal is to provide our patients with the best possible dental care in an environment of comfort and compassion.</p>
                </div>
            </div>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-20">
                    <div className="bg-gray-100 p-8">
                        <img className="rounded-full mx-auto " width="100px" src="/images/doc-1.jpg" alt="" />
                        <h3 className="text-2xl text-center py-4">Andrea Hayes</h3>
                        <div className="text-center">
                        <a href=""><i class="fa fa-facebook mr-4 inline-block hover:text-primary"></i></a>
                        <a href=""><i class="fab fa-twitter mr-4 inline-block hover:text-primary"></i></a>
                        <a href=""><i class="fab fa-linkedin-in inline-block hover:text-primary"></i></a>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-8">
                        <img className="rounded-full mx-auto " width="100px" src="/images/doc-2.jpg" alt="" />
                        <h3 className="text-2xl text-center py-4">Elizabeth Welsh</h3>
                        <div className="text-center">
                        <a href=""><i class="fa fa-facebook mr-4 inline-block hover:text-primary"></i></a>
                        <a href=""><i class="fab fa-twitter mr-4 inline-block hover:text-primary"></i></a>
                        <a href=""><i class="fab fa-linkedin-in inline-block hover:text-primary"></i></a>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-8">
                        <img className="rounded-full mx-auto " width="100px" src="/images/doc-3.jpg" alt="" />
                        <h3 className="text-2xl text-center py-4">Emily Silver</h3>
                        <div className="text-center">
                        <a href=""><i class="fa fa-facebook mr-4 inline-block hover:text-primary"></i></a>
                        <a href=""><i class="fab fa-twitter mr-4 inline-block hover:text-primary"></i></a>
                        <a href=""><i class="fab fa-linkedin-in inline-block hover:text-primary"></i></a>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-8">
                        <img className="rounded-full mx-auto " width="100px" src="/images/doc-4.jpg" alt="" />
                        <h3 className="text-2xl text-center py-4">David Nutter</h3>
                        <div className="text-center">
                        <a href=""><i class="fa fa-facebook mr-4 inline-block hover:text-primary"></i></a>
                        <a href=""><i class="fab fa-twitter mr-4 inline-block hover:text-primary"></i></a>
                        <a href=""><i class="fab fa-linkedin-in inline-block hover:text-primary"></i></a>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-8">
                        <img className="rounded-full mx-auto " width="100px" src="/images/doc-5.jpg" alt="" />
                        <h3 className="text-2xl text-center py-4">Stewart Whelan</h3>
                        <div className="text-center">
                        <a href=""><i class="fa fa-facebook mr-4 inline-block hover:text-primary"></i></a>
                        <a href=""><i class="fab fa-twitter mr-4 inline-block hover:text-primary"></i></a>
                        <a href=""><i class="fab fa-linkedin-in inline-block hover:text-primary"></i></a>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-8">
                        <img className="rounded-full mx-auto " width="100px" src="/images/doc-6.jpg" alt="" />
                        <h3 className="text-2xl text-center py-4">Alex Turner</h3>
                        <div className="text-center">
                        <a href=""><i class="fa fa-facebook mr-4 inline-block hover:text-primary"></i></a>
                        <a href=""><i class="fab fa-twitter mr-4 inline-block hover:text-primary"></i></a>
                        <a href=""><i class="fab fa-linkedin-in inline-block hover:text-primary"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;