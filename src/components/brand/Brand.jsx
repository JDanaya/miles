import React from "react";
import Alamo from '../../assets/img/alamo.PNG'
import budget from '../../assets/img/budget.PNG'
import hertz from '../../assets/img/hertz.PNG'
import national from '../../assets/img/national.PNG'
import {Container, Content, ImgAlamo, ImgBudget, ImgHertz, ImgNational } from './Brand.style'

function Brand() {
  return (
    <Container>
        <Content>
          <ImgAlamo src={Alamo} alt="Logo Marca" />
          <ImgBudget src={budget} alt="Logo Marca" />
          <ImgHertz src={hertz} alt="Logo Marca" />
          <ImgNational src={national} alt="Logo Marca" />
        </Content>
    </Container>
  );
}
export default Brand;