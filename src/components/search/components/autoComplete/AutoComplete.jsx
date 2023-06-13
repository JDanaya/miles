import React from 'react';
import Car from '../../../../assets/icono/Carro'
import {Localidad, Div, Txt, Input} from './AutoComplete.style'

function AutoComplete() {
  return (
    <Div>
        <Car/>
        <Localidad>
            <Txt>localidad de Retiro</Txt>
            <Input placeholder='Ciudad, Aeropuerto o Ciudad' type="text"/>
        </Localidad>
    </Div>
  );
}
export default AutoComplete;