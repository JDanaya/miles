import React from "react";
import styled from 'styled-components'

function Bandera() {
  return (
    <Button>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <defs>
          <clipPath id="clip-path">
            <circle id="Elipse_122" data-name="Elipse 122" cx="10" cy="10" r="10" transform="translate(1523.882 20.813)" fill="none"/>
          </clipPath>
        </defs>
        <g id="Grupo_382" data-name="Grupo 382" transform="translate(-1523.882 -20.813)" clip-path="url(#clip-path)">
          <rect id="Rectángulo_175" data-name="Rectángulo 175" width="33.959" height="12.906" transform="translate(1516.403 15.84)" fill="#ff0"/>
          <rect id="Rectángulo_176" data-name="Rectángulo 176" width="33.959" height="6.861" transform="translate(1516.403 28.746)" fill="#002c80"/>
          <rect id="Rectángulo_177" data-name="Rectángulo 177" width="33.959" height="6.892" transform="translate(1516.403 35.607)" fill="red"/>
        </g>
      </svg>
    </Button>
    
  );
}

const Button = styled.button`
border:none;
background-color:transparent;
`

export default Bandera;