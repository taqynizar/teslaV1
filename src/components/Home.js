import React from 'react'
import styled from 'styled-components'
import Section from './Section';

function Home() {
  return (
    <Container>
        <Section 
          title="Model S"
          discription="Order Online for touchless delivery"
          backgroundImg="model-s.jpg"
          leftBtnText="custom order"
          rightBtnText="exsting invintory"
        />
        <Section 
          title="Model Y"
          discription="Order Online for touchless delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="custom order"
          rightBtnText="exsting invintory"
        />
        <Section 
          title="Model 3"
          discription="Order Online for touchless delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="custom order"
          rightBtnText="exsting invintory"
        />
        <Section 
          title="Model X"
          discription="Order Online for touchless delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="custom order"
          rightBtnText="exsting invintory"
        /> 
        <Section 
          title="Lowest Cost Solar Panels in America"
          discription="Money-Back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn more"
        />
        <Section 
          title="Solar for new roofs"
          discription="solar roof cost less Than a New roof"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn more"
        />
        <Section 
          title="Accessories"
          discription=""
          backgroundImg="accessories.jpg"
          leftBtnText="Shop Now"
        />
    </Container>
  )
}

export default Home;
const Container = styled.div`
hight: 100vh;
z-index: 10;
`