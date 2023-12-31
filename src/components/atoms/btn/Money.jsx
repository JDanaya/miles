import React from "react";
import styled from 'styled-components'

function Money() {
  return (
    <Button>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <g id="Moneda" transform="translate(-1648 -21)">
          <g id="Grupo_4648" data-name="Grupo 4648" transform="translate(581.314 -444.951)">
            <g id="Elipse_239" data-name="Elipse 239" transform="translate(1066.686 465.951)" fill="none" stroke="#e6484b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.2">
              <circle cx="10" cy="10" r="10" stroke="none"/>
              <circle cx="10" cy="10" r="9.4" fill="none"/>
            </g>
            <g id="Grupo_4619" data-name="Grupo 4619" transform="translate(1074.425 469.94)">
              <path id="Trazado_6308" data-name="Trazado 6308" d="M1080.662,481.7a2.26,2.26,0,0,0,4.521,0c0-3.037-4.521-1.617-4.521-4.521a2.26,2.26,0,0,1,4.521,0" transform="translate(-1080.662 -473.421)" fill="none" stroke="#e6484b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.2"/>
              <line id="Línea_360" data-name="Línea 360" y2="1.498" transform="translate(2.26)" fill="none" stroke="#e6484b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.2"/>
              <line id="Línea_361" data-name="Línea 361" y2="1.498" transform="translate(2.26 10.54)" fill="none" stroke="#e6484b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.2"/>
            </g>
          </g>
        </g>
      </svg>
    </Button>
  );
}

const Button = styled.button`
margin-right:12px;
border:none;
background-color:transparent;
`

export default Money;