import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth()
  return (
    <nav className="bgwhite">


      <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-2">
        <div className="relative flex items-center justify-between h-16">

          <div className="flex-1 flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/home"><h3 className="text-2xl lg:text-3xl font-bold"><span className="text-primary">Optical</span>Doc</h3></NavLink>
            </div>
            <div className="hidden lg:block flex-shrink-0 flex items-center mx-auto">
              <NavLink className="mx-2 font-medium hover:bg-gray-100 px-5 py-2 rounded-md" to="/home" activeClassName="text-primary bg-gray-100">Home</NavLink>
              <NavLink className="mx-2 font-medium hover:bg-gray-100 px-5 py-2 rounded-md" to="/team" activeClassName="text-primary bg-gray-100">Team</NavLink>
              <NavLink className="mx-2 font-medium hover:bg-gray-100 px-5 py-2 rounded-md" to="/contact" activeClassName="text-primary bg-gray-100">Contact</NavLink>
            </div>
          </div>

          {
            user.email && <div className="flex items-center">
              <img width="30px" height="30px" className="rounded-full	mr-2 border-primary border-2" src={user.photoURL || 'https://i.ibb.co/FVdSWWM/download.jpg'} alt="" />
              <p>{user.displayName || 'unknown'}</p>

            </div>
          }

          <div className="flex items-center pr-2">
            {
              user.email ? <button onClick={logOut} className="border border-1 border-primary text-primary hover:bg-gray-100 transition-all px-6 py-2 rounded-full ml-2">Log out</button> :
                <div>
                  <NavLink to="/login" className="border border-1 border-primary text-primary hover:bg-gray-100 transition-all px-6 py-2 rounded-full ml-2">Login</NavLink>
                  <NavLink to="/register" className="bg-primary hover:bg-primary-dark transition-all text-white px-6 py-2 rounded-full ml-2">Register</NavLink>
                </div>
            }



          </div>

        </div>

      </div>

      <div className="lg:hidden grid grid-cols-3 bg-secondary mb-1">
        <NavLink className="text-white  text-center w-full  font-medium hover:bg-primary  px-5 py-2  " to="/home" activeClassName="bg-primary ">Home</NavLink>
        <NavLink className="text-white  text-center w-full  font-medium hover:bg-primary  px-5 py-2  " to="/team" activeClassName="bg-primary ">Team</NavLink>
        <NavLink className="text-white  text-center w-full  font-medium hover:bg-primary  px-5 py-2  " to="/contact" activeClassName="bg-primary ">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Header;