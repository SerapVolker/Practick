import React from 'react'
import styled from 'styled-components'
import Ava from '../Photo/Ava.svg'
import Ava1 from '../Photo/Ava1.svg'
import Ava2 from '../Photo/Ava2.svg'
import Ava3 from '../Photo/Ava3.svg'
import Ava4 from '../Photo/Ava4.svg'
import Ava5 from '../Photo/Ava5.svg'
import Star from '../Photo/Star.svg'
const Container = styled.div`
margin-top: 300px;
padding-top: 300px;
height: 1100px;
background-color: #e9e9e9ff;
`
const Maintext = styled.div`
color: red;
margin-left: 680px;
margin-top:-190px;
font-size: 20px;
`
const Maintext2 = styled.div`
color: Black;
margin-left: 380px;
margin-top: 0px;
font-size: 40px;
`
const Pack = styled.div`
margin-left: 200px;    
margin-top: 100px;
    width: 350px;
    height: 360px;
    background: #ffffffff;
    border-radius: 10px;
    transition: transform 0.3s ease;
    &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px #005effff;
    }
`
const Text1 = styled.div`
font-size: 25px;
padding-top: 70px;
margin-left: 80px;
fomt-weight: 700;
color: black;

`
const Text2 = styled.div`
padding-top: 0px;
margin-left: 140px;
font-size: 15px;
color: #9f9f9fff;
`
const Image = styled.div`
margin-top: -200px;
margin-left: 90px;
` 
const Text3 = styled.div`
padding-top: 30px;
margin-left: 40px;
font-size: 20px;
color: #9f9f9fff;
`
const Stars = styled.div`
margin-left:110px;
margin-top: 40px;
`
const Pack1 = styled.div`
margin-left: 600px;    
margin-top: -360px;
    width: 350px;
    height: 360px;
    background: #ffffffff;
    border-radius: 10px;
    transition: transform 0.3s ease;
    &:hover {
    transform: translateY(-10px);
     box-shadow: 0 20px 40px #005effff;
    }
`
const Pack2 = styled.div`
margin-left: 1000px;    
margin-top: -360px;
    width: 350px;
    height: 360px;
    background: #ffffffff;
    border-radius: 10px;
    transition: transform 0.3s ease;
    &:hover {
    transform: translateY(-10px);
     box-shadow: 0 20px 40px #005effff;
    }
`
const Text4 = styled.div`
font-size: 25px;
padding-top: 70px;
margin-left: 100px;
fomt-weight: 700;
color: black;
`
const Image1 = styled.div`
margin-top: -190px;
margin-left: 120px;
` 
const Image2 = styled.div`
margin-top: -190px;
margin-left: 120px;
` 
const Text5 = styled.div`
padding-top: 80px;
margin-left: 40px;
font-size: 20px;
color: #9f9f9fff;
`
const Text6 = styled.div`
padding-top: 0px;
margin-left: 130px;
font-size: 15px;
color: #9f9f9fff;
`
const Pack3 = styled.div`
margin-left: 1000px;    
margin-top:170px;
    width: 350px;
    height: 360px;
    background: #ffffffff;
    border-radius: 10px;
    transition: transform 0.3s ease;
    &:hover {
    transform: translateY(-10px);
     box-shadow: 0 20px 40px #005effff;
    }
`
const Text7 = styled.div`
padding-top: 0px;
margin-left: 150px;
font-size: 15px;
color: #9f9f9fff;
`
const Pack4 = styled.div`
margin-left: 600px;    
margin-top:-360px;
    width: 350px;
    height: 360px;
    background: #ffffffff;
    border-radius: 10px;
    transition: transform 0.3s ease;
    &:hover {
    transform: translateY(-10px);
     box-shadow: 0 20px 40px #005effff;
    }
`
const Pack5 = styled.div`
margin-left: 200px;    
margin-top:-360px;
    width: 350px;
    height: 360px;
    background: #ffffffff;
    border-radius: 10px;
    transition: transform 0.3s ease;
    &:hover {
    transform: translateY(-10px);
     box-shadow: 0 20px 40px #005effff;
    }
`
const Text8 = styled.div`
font-size: 25px;
padding-top: 70px;
margin-left: 120px;
fomt-weight: 700;
color: black;
`
const Text9 = styled.div`
padding-top: 0px;
margin-left: 135px;
font-size: 15px;
color: #9f9f9fff;
`
const Frames4 = () => {
  return (
    <Container>
   <Maintext>
  <strong>Testimonials</strong>
   </Maintext>
    <Maintext2><strong>Some testimonials from our customers</strong></Maintext2>
 <Pack>
  <Text1><strong>Ronald Richards</strong></Text1>
  <Text2>Google inc.</Text2>
  <Image> <img src={Ava}/></Image>
  <Text3>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, sed <br/> do eiusmod tempor incididunt.</Text3>
  <Stars><img src={Star}/></Stars>
    </Pack>
     <Pack1>
  <Text4><strong>Guy Hawkins</strong></Text4>
  <Text2>Paypal inc.</Text2>
  <Image1> <img src={Ava1}/></Image1>
  <Text5>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, sed <br/> do eiusmod tempor incididunt.</Text5>
  <Stars><img src={Star}/></Stars>
    </Pack1>
    <Pack2>
  <Text1><strong>Kristin Watson</strong></Text1>
  <Text6>Microsoft inc.</Text6>
  <Image2> <img src={Ava2}/></Image2>
  <Text5>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, sed <br/> do eiusmod tempor incididunt.</Text5>
  <Stars><img src={Star}/></Stars>
    </Pack2>
      <Pack3>
  <Text1><strong>Courtney Henry</strong></Text1>
  <Text7>Apple inc.</Text7>
  <Image2> <img src={Ava3}/></Image2>
  <Text5>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, sed <br/> do eiusmod tempor incididunt.</Text5>
  <Stars><img src={Star}/></Stars>
    </Pack3>
     <Pack4>
  <Text1><strong>Savannah Nguyen</strong></Text1>
  <Text7>Twitter inc.</Text7>
  <Image2> <img src={Ava4}/></Image2>
  <Text5>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, sed <br/> do eiusmod tempor incididunt.</Text5>
  <Stars><img src={Star}/></Stars>
    </Pack4>
       <Pack5>
  <Text8><strong>Robert Fox</strong></Text8>
  <Text9>Facebook inc.</Text9>
  <Image2> <img src={Ava5}/></Image2>
  <Text5>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, sed <br/> do eiusmod tempor incididunt.</Text5>
  <Stars><img src={Star}/></Stars>
    </Pack5>

    </Container>
  )
}

export default Frames4