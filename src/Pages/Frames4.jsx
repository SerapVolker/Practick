import React from 'react'
import styled from 'styled-components'
import Image from '../Photo/Image.svg'
const Container = styled.div`
`
const Maintext = styled.div`
color: red;
margin-left: 660px;
margin-top: 40px;
font-size: 20px;
`
const Maintext2 = styled.div`
color: Black;
margin-left: 380px;
margin-top: 10px;
font-size: 40px;
`
const Background = styled.div`
position:absolute;
    z-index: -1;
    margin-left: -50px;
    margin-top: -650px;
`
const Frames4 = () => {
  return (
    <Container>
   <Maintext>
  <strong>Frequently Ask Question</strong>
   </Maintext>
    <Maintext2><strong>Some of our frequently asked questions</strong></Maintext2>
    <Background>
 <img src={Image}/>
    </Background>
    </Container>
  )
}

export default Frames4