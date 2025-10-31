import React from 'react'
import styled from 'styled-components'
import Photos from '../Photo/Photo.svg'
import Photos1 from '../Photo/Photo1.svg'
import Photos2 from '../Photo/Photo2.svg'
import Photos3 from '../Photo/Photo3.svg'
import Photos4 from '../Photo/Photo4.svg'
import Photos5 from '../Photo/Photo5.svg'
import Sponcers from '../Photo/Sponcer.svg'
import Line from '../Photo/Vector.png'
const Container = styled.div`

`
const MainText = styled.div`
color: red;
margin-top: 400px;
margin-left: 660px;
font-size: 24px;
`
const MainText1 = styled.div`
color: black;
margin-top: 0px;
margin-left: 330px;
font-size: 44px;
`
const Image = styled.div`
`
const Photo = styled.div`
margin-top: 70px;      
margin-left: 10%;
`
const MiniText = styled.div`
font-size: 24px;
margin-left: 10px;
margin-top:-50px;
color: #ffffffff;
`
const Photo1 = styled.div`
margin-top: -393px;      
margin-left: 42%;
`
const MiniText1 = styled.div`
font-size: 24px;
margin-left: 10px;
margin-top:-50px;
color: #ffffffff;
`
const Photo2 = styled.div`
margin-top: -519px;      
margin-left: 75%;
`
const MiniText2 = styled.div`
font-size: 24px;
margin-left: 10px;
margin-top:-50px;
color: #ffffffff;
`
const Photo3 = styled.div`
margin-top: ;      
margin-left: 10%;
`
const MiniText3 = styled.div`
font-size: 24px;
margin-left: 10px;
margin-top:-50px;
color: #fffafaff;
`
const Photo4 = styled.div`
margin-top: -410px;      
margin-left: 42%;
`
const MiniText4 = styled.div`
font-size: 24px;
margin-left: 10px;
margin-top:-50px;
color: #ffffffff;
`
const Photo5 = styled.div`
margin-top: -490px;      
margin-left: 75%;
`
const MiniText5 = styled.div`
font-size: 24px;
margin-left: 10px;
margin-top:-50px;
color: #ffffffff;
`
const MainText2 = styled.div`
color: red;
margin-top: 100px;
margin-left: 590px;
font-size: 24px;
`
const MainText3  = styled.div`
color: black;
margin-top: 0px;
margin-left: 270px;
font-size: 44px;
`
const Sponc = styled.div`
margin-left: 320px;
margin-top: 100px
`
const Background = styled.div`
 z-index: -1;
 position:absolute;
 margin-top: -1400px;
`
const Background1 = styled.div`
 z-index: -1;
 position:absolute;
 margin-top: -900px;
 `
 const Frame3 = () => {
  return (
    <Container>
 <MainText>Working space</MainText>
  <MainText1><strong>Let’s meet our interior room decoration</strong></MainText1>
  <Image>
   <Photo><img src={Photos}/>
   <MiniText>Front working space</MiniText>
   </Photo> 

 <Photo1><img src={Photos1}/>
 <MiniText1>Meeting corner</MiniText1>
 </Photo1> 
<Photo2><img src={Photos2}/>
 <MiniText2>Guest meeting room</MiniText2>
 </Photo2>
 <Photo3><img src={Photos3}/>
 <MiniText3>Guest rest room</MiniText3>
 </Photo3>
 <Photo4><img src={Photos4}/>
 <MiniText4>Single working space</MiniText4>
 </Photo4>
  <Photo5><img src={Photos5}/>
 <MiniText5>Kitchen room</MiniText5>
 </Photo5>
 <MainText2>Some of Our Great Customers</MainText2>
<MainText3><strong>Some of the companies we have worked with</strong></MainText3>
  </Image>
  <Sponc>
<img src={Sponcers}/>   
  </Sponc>
<Background>
      <img src={Line}  width={1580}height={800}/>
    </Background>
<Background1>
      <img src={Line}  width={1580}height={800}/>
    </Background1>
</Container>
  )
}

export default Frame3