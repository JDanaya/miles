import styled from 'styled-components'
import {Navbar, Offcanvas, Nav } from 'react-bootstrap';

export const ContentNav = styled(Navbar)`
margin-top:15px;
`
export const SocialContent = styled.div`
width:100%;
line-height:40px; 
margin-top:85px;
`
/** Social media buttons alignment */
export const Social = styled.div`
max-width:300px;
width:64%;
display:flex;
justify-content:space-between;
`
export const TxtSocial = styled.p`
font-family:poppins;
color:#A0A0A0;
`
/** Drawer size */
export const NavDrawer = styled(Offcanvas.Body)`
min-width:350px;
margin-top:50px;
margin-left:20px;
line-height:60px;
`
/** Align buttons header */
export const DrawHeader = styled(Offcanvas.Header)`
max-width:450px;
min-width:350px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
`
/** Menu texts */
export const NavLink = styled(Nav.Link)`
font-size:22px;
font-family: poppins;
color:black;
`
export const ImgLogo = styled.img`
user-select: none;
-moz-user-select: none;
-webkit-user-drag: none;
-webkit-user-select: none;
-ms-user-select: none;
`
export const Btn = styled.button`
background: none;
border: 0;
color: inherit;
/* cursor: default; */
font: inherit;
line-height: normal;
overflow: visible;
padding: 0;
-webkit-user-select: none; /* for button */
-webkit-appearance: button; /* for input */
-moz-user-select: none;
-ms-user-select: none;
`

export const BtnToggle = styled(Navbar.Toggle)`
background: none;
border: 0;
color: inherit;
/* cursor: default; */
font: inherit;
line-height: normal;
overflow: visible;
padding: 0;
-webkit-user-select: none; /* for button */
-webkit-appearance: button; /* for input */
-moz-user-select: none;
-ms-user-select: none;
box-shadow: none !important;
`
