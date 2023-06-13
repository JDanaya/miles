import React from 'react';
import Star from '../../assets/icono/Star'
import Rating from '../../assets/icono/Rating'
import {Container, Content, ContentRating, Div, Ratings ,Txt1, Txt2, Txt3 } from './Review.style'


function Review() {
  return (
    <Container>
      <Content>
          <ContentRating>
          <Div>
              <Star/>
              <Txt1>Trustpilot</Txt1>
          </Div>
          <Ratings>
              <Txt2>
                  4.7 / 5 
              </Txt2>
              <Rating/>
          </Ratings>
        </ContentRating>
    </Content>  
      <Txt3>Basado en <b style={{color:'black'}}>3312+</b> comentarios</Txt3>
    </Container>
    
  );
}
export default Review;