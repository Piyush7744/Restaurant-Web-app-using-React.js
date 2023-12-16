import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section_padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase The new flavour"/>
      <h1 className='app__header_h1'>The Key to Fine Dinning</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie.
      Condimentum valupat morbi facilisis quam scelersique sapien.Et,penatibus akiquam amet telius</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
