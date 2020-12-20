import React, { useState } from 'react';

import { Header, CardNextAppointment, CardAppointment } from '../../../components';

import * as SC from './dashboard.style';

const Dashboard =  () => {
   const [selecteDate, setSelectedDate] = useState<Date>(new Date());

   return(
       <>
         <Header/>
         <SC.Content>
            <SC.Schedule>
               <h1>Horários agendados</h1>
               <p>
                  <span>Hoje</span>
                  <span>Dia 06</span>
                  <span>Segunda-feira</span>
               </p>
               <SC.NextAppointment>
                  <strong>Atendimento a seguir</strong>
                  <CardNextAppointment
                     isNextAppointment
                     name='Leonardo Minatti'
                     time='08:00'
                  />
               </SC.NextAppointment>

               <SC.Section>
                  <strong>Manhã</strong>
               </SC.Section>

               <SC.Appointment>
                  
               <CardAppointment
                  name='Leonardo Minatti'
                  time='08:00'
               />
                <CardAppointment
                  name='Leonardo Minatti'
                  time='08:00'
               />

               </SC.Appointment>

               <SC.Section>
                  <strong>Tarde</strong>
                  <CardAppointment
                  name='Leonardo Minatti'
                  time='08:00'
               />
                <CardAppointment
                  name='Leonardo Minatti'
                  time='08:00'
               />
               </SC.Section>

            </SC.Schedule>

            <SC.Calendar/>
         </SC.Content>
      </>
   )
}

export { Dashboard };