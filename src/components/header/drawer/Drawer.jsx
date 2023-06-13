/** React imports **/
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, {useState} from 'react';

/** other imports **/
import Logo from '../../../assets/img/Logo.png';
import Arrow from '../../../assets/icono/Arrow';
import Idioma from '../../../assets/img/Idioma.png';
import Facebook from '../../../assets/icono/Facebook';
import Twitter from '../../../assets/icono/Twitter';
import Google from '../../../assets/icono/Google';
import Instagram from '../../../assets/icono/Instagram';
import {SocialContent, 
        ContentNav, 
        TxtSocial, 
        NavDrawer, 
        DrawHeader, 
        BtnToggle, 
        NavLink, 
        ImgLogo, 
        Social,
        Btn
      } 
from './Drawer.style';

function Drawer() {
  /** useState hook for draw size **/
  const [visibility, setVisibility] = useState(false);
  const expand = false;

  return (
    <>
      {/** Changing state for size **/}
      <ContentNav key={expand} 
                  expand={expand} 
                  className="mb-3" 
                  expanded={visibility} 
                  onToggle={(toggle)=>setVisibility(toggle)
                  }>
        <Container fluid>
          <BtnToggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

          {/** Drawer contents **/}
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
            style={{width: '100vw'}}
          >
            <DrawHeader>
                 {/** Button with event to close the drawer **/}
                <Btn onClick={()=>setVisibility(false)}><Arrow/></Btn>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <div>
                  <ImgLogo src={Logo} alt='logo' />
                </div>
              </Offcanvas.Title>
              <Btn><img src={Idioma} alt='Idioma' /></Btn>
            </DrawHeader>
            <NavDrawer>
              <Nav>
                <NavLink href="#action1">Requisitos de Alquiler</NavLink>
                <NavLink href="#action2">Preguntas frecuentes</NavLink>
                <NavLink href="#action3">Localidades</NavLink>
                <NavLink href="#action4">Contáctanos</NavLink>
              </Nav>

              {/** Social media buttons **/}
              <SocialContent>
              <TxtSocial>SIGUENOS EN</TxtSocial>
              <Social>
                <Btn><Facebook/></Btn>
                <Btn><Twitter/></Btn>
                <Btn><Google/></Btn>
                <Btn><Instagram/></Btn>
              </Social>
            </SocialContent>
            </NavDrawer>
          </Navbar.Offcanvas>
        </Container>
      </ContentNav>
    </>
  );
}

export default Drawer;