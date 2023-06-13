import React from 'react';
import Drawer from '../header/drawer/Drawer';
import Logo from '../atoms/btn/Logo'
import Money from '../atoms/btn/Money';
import Bandera from '../atoms/btn/Bandera';
import {Container, Div, DivBtn} from './Header.style'

function Search() {
  return (
      <Container>
        {/** header elements **/}
        <Div>
          <Drawer/>
          <Logo/>
        </Div>
        <DivBtn>
          <Money/>
          <Bandera/>
        </DivBtn>
      </Container>
  );
}

export default Search;
