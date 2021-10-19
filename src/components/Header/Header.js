import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { user, error, googleSignIn, logOut } = useAuth()
  return (
    <nav className="bgwhite">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-2">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">


          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/home"><h3 className="text-3xl font-bold"><span className="text-primary">Optical</span>Doc</h3></NavLink>
            </div>
            <div className="flex-shrink-0 flex items-center mx-auto">
              <NavLink className="mx-3 font-medium hover:bg-gray-100 px-5 py-2 rounded-md" to="/home" activeClassName="text-primary bg-gray-100">Home</NavLink>
              <NavLink className="mx-3 font-medium hover:bg-gray-100 px-5 py-2 rounded-md" to="/team" activeClassName="text-primary bg-gray-100">Team</NavLink>
              <NavLink className="mx-3 font-medium hover:bg-gray-100 px-5 py-2 rounded-md" to="/contact" activeClassName="text-primary bg-gray-100">Contact</NavLink>
            </div>
          </div>
          {
            user.email && <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <img width="30px" height="30px" className="rounded-full	mr-2 border-primary border-2" src={user.photoURL || 'https://i.ibb.co/FVdSWWM/download.jpg'} alt="" />
            <p>{user.displayName || 'unknown'}</p>

          </div>
          }
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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


    </nav>
  );
};

export default Header;