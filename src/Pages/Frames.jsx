import React from 'react'
import styled from 'styled-components'
import Hot from '../Photo/1Fram.png'
import Hit from '../Photo/2Fram.png'
import Hat from '../Photo/3Fram.png'

const Container = styled.div`

`
const Cont = styled.div`
margin-top: 200px;
margin-left: 650px;

`
const Text = styled.div`
font-size: 20px;
color: red;
`
const Text1 = styled.div`
margin-left: -450px;
`
const Text2 = styled.div`
margin-left: -210px;
`
const Panel = styled.div`

`
const Carta1 = styled.div`

`

const Image = styled.div`
margin-left: 120px;
`
const Image1 = styled.div`
margin-left: 475px;
margin-top: -604px;
`
const Image2 = styled.div`
margin-left: 825px;
margin-top: -604px;
`
const Frames = () => {
  return (
    <Container>
   <Cont>
    <Text><h3>Our Services</h3></Text>
    <Text1><h1>The various services we provide to make your</h1></Text1>
    <Text2><h1>business more powerful</h1></Text2>
   </Cont>
   <Panel>
    <Carta1>
      <Image>
    <img src={Hot}/>
      </Image>
      <Image1>
    <img src={Hit}/>
      </Image1>
      <Image2>
    <img src={Hat}/>
      </Image2>
  
    </Carta1>
   </Panel>
    </Container>
  )
}

export default Frames