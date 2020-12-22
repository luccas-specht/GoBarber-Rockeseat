import React, { useCallback, useState } from 'react';

import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { daysNotWorked, daysPt, monthsPt, daysAvailable } from '../../../../constants';

import { Header, CardNextAppointment, CardAppointment } from '../../../components';

import * as SC from './dashboard.style';

const Dashboard =  () => {
   const [selectedDate, setSelectedDate] = useState(new Date());

   const handleDateChange = useCallback((day: Date, dayModifiers: DayModifiers )=> {
      if(dayModifiers.available){
         setSelectedDate(day)
      };

   },[]);

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

            <SC.Calendar>
              <DayPicker
               weekdaysShort={daysPt}
               months={monthsPt}
               fromMonth={new Date()}
               disabledDays={daysNotWorked}
               modifiers={{available: daysAvailable}}
               selectedDays={selectedDate}
               onDayClick={handleDateChange}
              />
            </SC.Calendar>
            
         </SC.Content>
      </>

   )
}

export { Dashboard };