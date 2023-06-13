import styled from 'styled-components'
import DatePicker from "react-datepicker";

export const DivCalendar = styled.div`
width:90%;
height:85px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding:15px;
border-radius:5px;
background:white;
` 
export const DivSection = styled.div`
line-height:1px;
` 
export const Txt = styled.p`
color:#6E6E6E;
margin-top:9px;
margin-left:15px;
font-weight:500;
font-family: poppins;
` 
export const Input = styled(DatePicker)`
width:80px;
font-size:19px;
margin-left:15px;
border:none;
font-family: poppins;
font-weight: 600;
text-transform: capitalize;
cursor: pointer;
::placeholder {
  color: black;
  font-weight:700;
}
outline: none;
` 
export const First = styled.div`
width:170px;
display:flex; 
flex-direction:row; 
justify-content:start; 
align-items:center;
border-right:solid 1px #DCDCDC;
` 
export const Second = styled.div`
width:190px;
display:flex; 
flex-direction:row; 
justify-content:start; 
align-items:center;
padding-left:10px;
` 