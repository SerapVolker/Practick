import React from 'react'
import styled from 'styled-components'
import Fon from '../Photo/Fon.png'
import Imag from '../Photo/Photo.png'
import Eclipses from '..//Photo/Exclude.svg'
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
 margin-left: -790px;
 margin-top:  px;
`
const Photo = styled.div`
margin-left: 180px;
margin-top: 50px;
`
const Background1 = styled.div`
 z-index: -1;
 position:absolute;
    width: 1600px;
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
    transition: transform 0.3s ease;
    &:hover {
    transform: translateY(-10px);
     
    }
`
const Pack1 = styled.div`
margin-left: 360px;    
margin-top: -410px;
    width: 260px;
    height: 330px;
    background: #ffffffff;
    border-radius: 10px;
    transition: transform 0.3s ease;
    &:hover {
    transform: translateY(-10px);
     
    }
`
const Pack2 = styled.div`
margin-left: 360px;    
margin-top: 50px;
    width: 260px;
    height: 330px;
    background: #ffffffff;
    border-radius: 10px;
    transition: transform 0.3s ease;
    &:hover {
    transform: translateY(-10px);
     
    }
`
const Pack3 = styled.div`
margin-left: 30px;    
margin-top: -250px;
    width: 260px;
    height: 330px;
    background: #ffffffff;
    border-radius: 10px;
    transition: transform 0.3s ease;
    &:hover {
    transform: translateY(-10px);
     
    }
`
const Text4 = styled.div`
font-size: 80px;
padding-top: 70px;
margin-left: 40px;
fomt-weight: 700;
color: blue

`
const Text5 = styled.div`
padding-top: 0px;
margin-left: 25px;
font-size: 20px;
color: #9f9f9fff;
`
const Text6 = styled.div`
font-size: 80px;
padding-top: 70px;
margin-left: 20px;
fomt-weight: 700;
color: orange;

`
const Text7 = styled.div`
padding-top: 0px;
margin-left: 25px;
font-size: 20px;
color: #9f9f9fff;
`
const Text8 = styled.div`
font-size: 80px;
padding-top: 50px;
margin-left: 50px;
fomt-weight: 700;
color: green;

`
const Text9 = styled.div`
padding-top: 0px;
margin-left: 30px;
font-size: 20px;
color: #9f9f9fff;
`
const Text10 = styled.div`
font-size: 80px;
padding-top: 36px;
margin-left: 23px;
fomt-weight: 700;
color: red;

`
const Text11 = styled.div`
padding-top: -50px;
margin-left: 25px;
font-size: 20px;
color: #9f9f9fff;
`
const TextLine = styled.div`
margin-left:700px;
margin-top:-350px;
`
const Eclipse = styled.div`
`
const MiniTexts = styled.div`
margin-left: 40px;
margin-top: -38px;
font-size: 25px;
color: #767676ff;
`
const Eclipse1 = styled.div`
margin-top: 20px;
`
const MiniTexts1 = styled.div`
margin-left: 40px;
margin-top: -38px;
font-size: 25px;
color: #767676ff;
`
const Eclipse2 = styled.div`
margin-top: 20px;
`
const MiniTexts2 = styled.div`
margin-left: 40px;
margin-top: -38px;
font-size: 25px;
color: #767676ff;
`
const Eclipse3 = styled.div`
margin-top: 20px;
`
const MiniTexts3 = styled.div`
margin-left: 40px;
margin-top: -38px;
font-size: 25px;
color: #767676ff;
`
const Eclipse4 = styled.div`
margin-top: 20px;
`
const MiniTexts4 = styled.div`
margin-left: 40px;
margin-top: -38px;
font-size: 25px;
color: #767676ff;
`

const Frames2 = () => {
  return (
    <Container>
    <Text><h4>Our Documentation</h4></Text>
    <Text1><h1>See what our profile is like and how we work for your</h1></Text1>
    <Text2><h1>business</h1></Text2>
    <Background>
   <img src={Fon} width={2450}/>
    </Background>
    <Photo><img src={Imag}/></Photo>
    <Background1>
 
    </Background1>
    <Text3><h1>Customer<br/> satisfaction is<br/> our first priority</h1></Text3>
<MiniText><p>We serve many customers, ranging from small<br/> businesses, medium entrepreneurs, to world-<br/>renowned companies. Their satisfaction is our<br/> pleasure. We strive to provide the best service by:</p></MiniText>
    <Pack>
  <Text4><strong>70K+</strong></Text4>
  <Text5>We have more than<br/> customers</Text5>
    </Pack>
   <Pack1>
    <Text6><strong>100K+</strong></Text6>
  <Text7>Projects we have<br/>completed</Text7>     
    </Pack1>
    <Pack2>
        <Text8><strong>200+</strong></Text8>
  <Text9>Support from world-<br/>renowned companies</Text9>
    </Pack2>
<Pack3>
       <Text10><strong>10M+</strong></Text10>
  <Text11>People who are helped<br/> because of our hard<br/> work</Text11> 
    </Pack3>
  <TextLine>
    <Eclipse>
      <img src={Eclipses}/>
      <MiniTexts>Provide idea support from our creative team</MiniTexts>
    </Eclipse>
    <Eclipse1>
      <img src={Eclipses}/>
      <MiniTexts1>Provide attractive and professional design<br/> services</MiniTexts1>
    </Eclipse1>
    <Eclipse2>
      <img src={Eclipses}/>
      <MiniTexts2>Support for service 24 hours a week</MiniTexts2>
    </Eclipse2>
    <Eclipse3>
      <img src={Eclipses}/>
      <MiniTexts3>Helping our customers to grow their business</MiniTexts3>
    </Eclipse3>
     <Eclipse4>
      <img src={Eclipses}/>
      <MiniTexts4>Provide support to market products through<br/> online marketplace</MiniTexts4>
    </Eclipse4>
  </TextLine>
    </Container>
  )
}

export default Frames2