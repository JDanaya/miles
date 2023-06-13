import React from 'react';
import CarRed from '../../assets/img/car.png'
import {Container, Div, Image, Content, Txt1, Txt2} from './Adds.style'

function Adds() {
  return (
    <Container>
      <Content>
        <Div>
            <Image src={CarRed} alt="Imagen carro adds" />
            <Txt1>¡SEGURO DE VIAJE <span style={{color:'#E6484B'}}>GRATIS!</span></Txt1>
        </Div>
        <Div>
            <Txt2>
              Con cobertura médica frente al Coronavirus de <b>USD $100.000</b> 
            </Txt2>
        </Div>
    </Content>  
    </Container>
  );
}
export default Adds;