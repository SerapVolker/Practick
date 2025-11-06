import React from 'react'
import styled from 'styled-components'
import Line from '../Photo/Vector.png'
import Icon from '../Photo/Icon.svg'
import Mapses from '../Photo/Maps.svg'
const Container = styled.div`

`
const MainPack = styled.div`
margin-left: 260px;    
margin-top: 300px;
    width: 1000px;
    height: 330px;
    background: #5c47ffff;
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

const Background = styled.div`
position:absolute;
    z-index: -1;
    margin-top:-500px;
    margin-left:0px
`
const Input = styled.div`
padding-left: 250px;
padding-top: 30px;
`
const Maps = styled.div`   
margin-top: -100px;
    width: 1580px;
    height: 1000px;
    background: #001665ff;
    border-radius: 10px;
    position:absolute;
    z-index: -1;
`
const Iconic = styled.div`
margin-top: 200px;
margin-left: 170px;
`
const Text2 = styled.div`
margin-top: 0px;
margin-left: 200px;
color: white;
font-size: 20px;
`
const Text3 = styled.div`
margin-top: -330px;
margin-left: 740px;
color: white;
font-size: 20px;
`
const Map = styled.div`
margin-top: 50px;
margin-left: 740px;
`
const Text4 = styled.div`
margin-top: -310px;
margin-left: 1240px;
color: white;
font-size: 20px;
`
const Text5 = styled.div`
margin-top: 40px;
margin-left: 1240px;
color: white;
font-size: 20px;
`
const Text6 = styled.div`
margin-top: 10px;
margin-left: 1240px;
color: white;
font-size: 20px;
`
const Text7 = styled.div`
margin-top: 10px;
margin-left: 1240px;
color: white;
font-size: 20px;
`
const Lines = styled.div`
margin-left: 200px;    
margin-top: 100px;
    width: 1200px;
    height: 2px;
    background: #ffffffff;
`
const Text8 = styled.div`
margin-top: 10px;
margin-left: 200px;
color: white;
font-size: 20px;
`
const Text9 = styled.div`
margin-top: -30px;
margin-left: 1000px;
color: white;
font-size: 20px;
`

 const Frames7 = () => {
  return (
    <Container>
  <MainPack>
    <Text><strong>Get Notified About Project</strong> </Text>
        <Text1><strong>Subscribe Now</strong> </Text1>
 <Input>
   <input placeholder='Email' style={{width: '500px', height: '50px',fontSize: '20px', borderRadius: '20px', color: '#000000ff'}} />
 </Input>
</MainPack>
  <Background><img src={Line} width={1580}height={1180}/></Background>
<Maps>
    <Iconic>
        <img src={Icon}/>

    </Iconic>
    <Text2>Lorem ipsum dolor sit amet, consectetur
        <br/> adipiscing elit, sed do eiusmod tempor
        <br/>  incididunt ut labore et dolore magna aliqua.
        <br/>  Ut enim ad minim veniam, quis nostrud
        <br/>  exercitation ullamco laboris nisi ut aliquip ex
         <br/> ea commodo consequat. Duis aute irure
         <br/>  dolor in reprehenderit in voluptate velit esse
         <br/>  cillum dolore eu fugiat nulla pariatur.</Text2>
         <Text3><strong>Our Office</strong></Text3>
         <Map> <img src={Mapses}/></Map>
         <Text4><strong>Contact</strong></Text4>
         <Text5> Jl KH Samanhudi<br/> Metro Atom Plaza Bl<br/> AKS 1/11, Dki Jakarta</Text5>
           <Text6> info@yourdomain.<br/>com</Text6>
            <Text7> +62 (0) 000 0000 00</Text7>
            <Lines></Lines>
                    <Text8>© 2021 Creative Agency</Text8>
                            <Text9> Home  Works  About  Pricing   About</Text9>
</Maps>
    </Container>
  )
}
export default Frames7