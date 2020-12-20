import React from 'react';

import { FiClock } from 'react-icons/fi';

import * as SC from './card-next-appointment.style';

import imageDefault from '../../assets/images/this-person-does-not-exists.jpeg';

interface CardNextAppointmentProps {
    isNextAppointment?: boolean;
    image: string;
    name: string;
    time?: any;
};

const CardNextAppointment = ({ isNextAppointment, name, image, time }: CardNextAppointmentProps) => {
    return(
        <SC.Container
            isNextAppointment={isNextAppointment}
         >
            <img src={image} alt="image-user"/>
            <strong>{name}</strong>
            <span> 
                <FiClock/> 
                {time}
            </span>

        </SC.Container>
    );
    
};

export { CardNextAppointment };


CardNextAppointment.defaultProps = {
   image: imageDefault
  };