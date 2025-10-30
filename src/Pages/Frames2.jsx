import React from 'react'
import styled from 'styled-components'
import Fon from '../Photo/Fon.png'
import Imag from '../Photo/Photo.png'
import Fone from '../Photo/Fone.png'
const Container = styled.div`
`
const Text = styled.div`
color: red;
font-size: 20px;
margin-left: 650px;
margin-top: 100px;
`
const Text1 = styled.div`
font-size: 13px;
margin-left: 200px;
margin-top: -10px;
`
const Text2 = styled.div`
font-size: 13px;
margin-left: 650px;
margin-top: -25px;
`
const Background = styled.div`
 z-index: -1;
 position:absolute;
 margin-left: -600px;
 margin-top:  px;
`
const Photo = styled.div`
margin-left: 180px;
margin-top: 50px;
`
const Background1 = styled.div`
 z-index: -1;
 position:absolute;
    width: 2000px;
    height: 1000px;
    background: #e7e7e7ff;
    border-radiurgba(141, 141, 141, 1)
 `
 const Text3 = styled.div`
font-size: 20px;
margin-left: 700px
`
const MiniText = styled.div`
font-size: 23px;
margin-left: 710px;
color: #9f9f9fff;
`
const Pack = styled.div`
margin-left: 30px;    
margin-top: -320px;
    width: 260px;
    height: 330px;
    background: #ffffffff;
    border-radius: 10px;
`
const Pack1 = styled.div`
margin-left: 360px;    
margin-top: -410px;
    width: 260px;
    height: 330px;
    background: #ffffffff;
    border-radius: 10px;
`
const Pack2 = styled.div`
margin-left: 360px;    
margin-top: 50px;
    width: 260px;
    height: 330px;
    background: #ffffffff;
    border-radius: 10px;
`
const Pack3 = styled.div`
margin-left: 30px;    
margin-top: -250px;
    width: 260px;
    height: 330px;
    background: #ffffffff;
    border-radius: 10px;
`
const Text4 = styled.div`
font-size: 28px;
`
const Text5 = styled.div`

`

const Frames2 = () => {
  return (
    <Container>
    <Text><h4>Our Documentation</h4></Text>
    <Text1><h1>See what our profile is like and how we work for your</h1></Text1>
    <Text2><h1>business</h1></Text2>
    <Background>
   <img src={Fon}/>
    </Background>
    <Photo><img src={Imag}/></Photo>
    <Background1>
 
    </Background1>
    <Text3><h1>Customer<br/> satisfaction is<br/> our first priority</h1></Text3>
<MiniText><p>We serve many customers, ranging from small<br/> businesses, medium entrepreneurs, to world-<br/>renowned companies. Their satisfaction is our<br/> pleasure. We strive to provide the best service by:</p></MiniText>
    <Pack>
  <Text4>70К+</Text4>
  <Text5>We have more than<br/> customers</Text5>
    </Pack>
    <Pack1>
        
    </Pack1>
    <Pack2>
        
    </Pack2>
<Pack3>
        
    </Pack3>

    </Container>
  )
}

export default Frames2