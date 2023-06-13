import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import Formbg from '../../assets/img/bg-qs.png';

/* view background image */ 
export const Top = styled.div`
background-image:url(${Formbg});
background-repeat:no-repeat;
background-size:cover;
user-select: none;
-moz-user-select: none;
-webkit-user-drag: none;
-webkit-user-select: none;
-ms-user-select: none;
` 
/* view size */ 
export const Content = styled(Container)`
max-width:451px;
min-width:350px;
padding:0;
`




