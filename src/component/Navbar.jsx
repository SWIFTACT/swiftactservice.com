import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style';
import Login from './Login';
import SignUp from './SignUp';

const Navbar = () => {
  const loginRef = useRef();

  const handleToggleOpenLogin = () => {
    loginRef.current.classList.toggle('login-div');
  };
 

  return (
    <div className={`flex justify-between items-center w-full ${styles.padding} bg-white relative`}>
      <div>
        <img src="" alt="" />
        <span className='text-primary font-[700] text-[28px]'>SWIFT</span>
      </div>
      <div className='flex gap-6'>
        <p  onClick={handleToggleOpenLogin} className={` ${styles.ptext} text-primary font-[400] text-[28px] cursor-pointer`}>Sign Up</p>
        <p onClick={handleToggleOpenLogin} className={` ${styles.ptext} text-primary font-[400] text-[28px] cursor-pointer`}>Log In</p>
      </div>

      <div ref={loginRef} className='at-item'>
        <Login handleToggleOpenLogin={handleToggleOpenLogin} />
      </div>
    </div>
  );
};

export default Navbar;
