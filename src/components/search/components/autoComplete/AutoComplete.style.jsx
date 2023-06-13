import styled from 'styled-components'

/** Container alignment **/
export const Div = styled.div`
width:90%;
height:85px;
display:flex;
flex-direction:row;
justify-content:start;
align-items:center;
padding:15px;
border-radius:5px;
background:white;
` 
export const Localidad = styled.div`
line-height:1px;
` 
export const Txt = styled.p`
color:#6E6E6E;
margin-top:9px;
margin-left:15px;
font-weight:500;
font-family: poppins;
` 
export const Input = styled.input`
width:270px;
font-size:18px;
margin-left:15px;
border:none;
::placeholder {
  color: black;
  font-weight:630;
  font-family: poppins;
}
outline: none;
` 