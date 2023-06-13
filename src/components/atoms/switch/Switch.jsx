import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from './Switch.style'
import './switch.css'

function Switch() {
  return (
      <Container>
        <Form.Check
            type="switch"
            id="custom-switch"
            label="Lo quiero devolver en otra localidad"
        />
    </Container>
  );
}

export default Switch;