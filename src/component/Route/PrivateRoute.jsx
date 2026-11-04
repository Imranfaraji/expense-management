import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const PrivetRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
   if(loading){
    return <div className='w-full min-h-screen flex items-center justify-center'>
        <span className="loading loading-bars loading-xl"></span>
    </div>
   }
   if(!user){
    return <Navigate state={location?.pathname} to='/login'></Navigate>
   }
   return children
};

export default PrivetRouter;