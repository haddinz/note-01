import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Row, Col, Item, Title, SlideStyle, Button } from "./Testi.Style"
import DataTestimonial from '../../Utils/DataTestimonial'
import { Box } from '../Header/Header.Style'
import Next from "../svg/Next.svg"

const PreviousBtn = (props) => {
  const {className, onClick} = props
  return(
    <Button className={className} onClick={onClick} style={{transform: "scaleX(-1)"}}>
      <img src={Next} alt='next' />
    </Button>
  )    
}

const NextBtn = (props) => {
  const {className, onClick} = props
  return(
    <Button className={className} onClick={onClick}>
      <img src={Next} alt='next' />
    </Button>
  )    
}

const Testi = () => {
  const dataTestimonial = DataTestimonial
  return (
    <Row id="testimonial">
      <Box></Box>
      <Col>
        <Title>
          <h3>Testimonial</h3>
          <h2>What They Says</h2>
        </Title>
        <SlideStyle 
          dots
          prevArrow={<PreviousBtn/>}
          nextArrow={<NextBtn/>}
          dotsClass='slick-dots custom-indicator'>
          {dataTestimonial.map(({ user, status, profile, test }, index) => (
            <Item>
              <img src={profile} />
              <p>{user}</p>
              <p>{status}</p>
              <p>{test}</p>
            </Item>
          ))}
        </SlideStyle>
      </Col>
    </Row>
  )
}

export default Testi
