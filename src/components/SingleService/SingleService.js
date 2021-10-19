import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';

const SingleService = () => {
    const { serviceId } = useParams()
    const [services] = useServices()
    const requestService = services?.services?.find(service => parseInt(serviceId) === service.id)
        
    return (
        <div className="flex flex-col max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <div className="flex justify-between bg-primary py-1 px-3 text-white">
                        <p><i className="fas fa-clock"></i> {}</p>
                        <p><i className="fas fa-user-graduate"></i> {}</p>
                    </div>
                    <img width="100%" src={requestService?.imageURL} alt="" />
                </div>
                <div>
                    <h1 className="text-3xl font-medium py-2 uppercase">{requestService?.name}</h1>
                    <p className=" my-2">
                        {requestService?.description}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default SingleService;