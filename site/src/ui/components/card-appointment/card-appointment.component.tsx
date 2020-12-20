import React from 'react';

import { FiClock } from 'react-icons/fi';

import * as SC from './card-appointment.style';

import imageDefault from '../../assets/images/this-person-does-not-exists.jpeg';

interface CardAppointmentProps {
    image: string;
    name: string;
    time?: any;
};

const CardAppointment = ({ name, image, time }: CardAppointmentProps) => {
    return(
        <SC.Container>
            <span> 
                <FiClock/> 
                {time}
            </span>
            <div>
                <img src={image} alt="image-user"/>
                <strong> {name} </strong>
            </div>
        </SC.Container>
    );
};

export { CardAppointment };

CardAppointment.defaultProps = {
   image: imageDefault
  };