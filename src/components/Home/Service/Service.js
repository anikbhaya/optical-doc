import React from 'react';
import './Service.css'
import { NavLink } from 'react-router-dom';

const Service = ({service}) => {
    const {id, name, description, imageURL} = service
    return (
        <div className="service">
            <img src={imageURL} className="rounded" alt="" />
            <div className="bg-primary text-white w-11/12 mx-auto relative bottom-20 p-5">
                <h1 className="text-xl font-bold mb-2">{name}</h1>
                <p className="description">{description.slice(0, 180)}...</p>
                <NavLink to={`/services/${id}`} className="border border-1  hover:bg-primary-dark transition-all px-6 py-2 mt-8 inline-block ">Get Details</NavLink>
            </div>
        </div>
    );
};

export default Service;