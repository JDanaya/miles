import React, {useState} from 'react';
import Calendar from '../../../../assets/icono/Calendary'
import Calendar2 from '../../../../assets/icono/Calendar2'
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
import {DivCalendar, DivSection, Txt, Input, First, Second} from './Calendar.style'

registerLocale('es', es)
function Calendary() {
  
  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());

  return (
    <DivCalendar>
      <First>
          <Calendar/>
          <DivSection>
            <Txt>Recogida</Txt>
            <Input locale="es" dateFormat="d MMM" onChange={(date) => setStartDate(date)}  selected={startDate}/>
              
          </DivSection>
      </First>
      <Second>
          <Calendar2/>
          <DivSection>
              <Txt>Devolución</Txt>
              <Input locale="es" dateFormat="d MMM" onChange={(date) => setStartDate2(date)}  selected={startDate2}/>
          </DivSection>
      </Second>
    </DivCalendar>
  );
}

export default Calendary;