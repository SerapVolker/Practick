
import React from 'react'
import styled from 'styled-components'
import Line from '../Photo/Vector.png'
const Container = styled.div`

`
const MainPack = styled.div`
margin-left: 260px;    
margin-top: 300px;
    width: 1000px;
    height: 330px;
    background: #ffb700ff;
    border-radius: 10px;
`
const Text = styled.div`
color: #ffffff;
font-size: 20px;
margin-left: 420px;
padding-top: 60px;
`
const Text1 = styled.div`
color: #ffffff;
font-size: 45px;
margin-left: 300px;
padding-top: 10px;
`
const Button1 = styled.div`
margin-left: 390px;
margin-top: 50px;
button{
      
        background-color: #3c00f2ff;
        width: 230px;
        height: 70px;
        font-size: 20px;
        color: white;
    }
button:hover{ 
background-color: #3f42ffff; 
  transform: translateX(0px); 
  color: ;
  box-shadow: 0 20px 40px #005effff;
        }
 
`
const Background = styled.div`

position:absolute;
    z-index: -1;
    margin-top:-500px;
    margin-left:0px
`
 const Frames6 = () => {
  return (
    <Container>
  <MainPack>
    <Text><strong>Are You Ready For</strong> </Text>
        <Text1><strong>Start a New Project</strong> </Text1>
     <Button1><button>Start Now →</button></Button1>   
  </MainPack>
  <Background><img src={Line} width={1580}height={1180}/></Background>
    </Container>
  )
}

export default Frames6
