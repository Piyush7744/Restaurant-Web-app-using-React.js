import React from 'react';
import { images } from '../../constants';

const SubHeading = ({title}) => (
  <div style={{marginBottom:'0.1rem'}}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt="" className='spoon_img'/>
  </div>
);

export default SubHeading;
