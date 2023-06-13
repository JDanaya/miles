import React from 'react';
import Switch from '../atoms/switch/Switch';
import AutoComplete from './components/autoComplete/AutoComplete';
import Calendar from './components/calendar/Calendar';
import Lupa from '../atoms/lupa/Lupa';
import {Txt, Container} from './Search.style';

function Search() {
  return (
    <Container>
      <Txt>ALQUILER DE CARROS MIAMI</Txt>
      <AutoComplete/>
      <Switch/>
      <Calendar/>
      <Lupa/>
    </Container>
  );
}
export default Search;
