import React from 'react'
import styled from 'styled-components'
import Cart from "../Photo/Cart.png"
import CartAlt from "../Photo/CartAlt.png"
import Cart1 from "../Photo/Cart1.png"
import Cart1Alt from "../Photo/Cart1Alt.png"
import Cart2 from "../Photo/Cart2.png"
import Cart2Alt from "../Photo/Cart2Alt.png"
import Cart3 from "../Photo/Cart3.png"
import Cart3Alt from "../Photo/Cart3Alt.png"
import Cart4 from "../Photo/Cart4.png"
import Cart4Alt from "../Photo/Cart4Alt.png"
import Cart5 from "../Photo/Cart5.png"
import Cart5Alt from "../Photo/Cart5Alt.png"
import Line from '../Photo/Vector.png'
const Container = styled.div`
margin-top: px;
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
margin-top: -40px;
`
const LineCart = styled.div`
margin-top: 100px;
`
const Carts = styled.div`
margin-left: 200px;
`
const Carts1 = styled.div`
margin-left: 580px;
margin-top: -464px;
`
const Carts2 = styled.div`
margin-left: 960px;
margin-top: -464px;
`
const Carts3 = styled.div`
margin-left: 200px;
margin-top: 50px;
`
const Carts4 = styled.div`
margin-left: 580px;
margin-top: -464px;
`
const Carts5 = styled.div`
margin-left: 960px;
margin-top: -464px;
`

const Background = styled.div`
 z-index: -1;
 position:absolute;
 margin-top: -600px;

`
const Frames = () => {
  return (
    <Container>
   <Cont>
    <Text><h3>Our Services</h3></Text>
    <Text1><h1>The various services we provide to make your</h1></Text1>
    <Text2><h1>business more powerful</h1></Text2>
   </Cont>
   <LineCart>
     <Carts>
<img
    src={Cart}
    onMouseOver={e => (e.currentTarget.src = CartAlt)}
    onMouseOut={e => (e.currentTarget.src = Cart)}
  />
    </Carts>
       <Carts1>
<img
    src={Cart1}
    onMouseOver={e => (e.currentTarget.src = Cart1Alt)}
    onMouseOut={e => (e.currentTarget.src = Cart1)}
  />
    </Carts1>
       <Carts2>
<img
    src={Cart2}
    onMouseOver={e => (e.currentTarget.src = Cart2Alt)}
    onMouseOut={e => (e.currentTarget.src = Cart2)}
  />
    </Carts2>
           <Carts3>
<img
    src={Cart3}
    onMouseOver={e => (e.currentTarget.src = Cart3Alt)}
    onMouseOut={e => (e.currentTarget.src = Cart3)}
  />
    </Carts3>
               <Carts4>
<img
    src={Cart4}
    onMouseOver={e => (e.currentTarget.src = Cart4Alt)}
    onMouseOut={e => (e.currentTarget.src = Cart4)}
  />
    </Carts4>
                   <Carts5>
<img
    src={Cart5}
    onMouseOver={e => (e.currentTarget.src = Cart5Alt)}
    onMouseOut={e => (e.currentTarget.src = Cart5)}
  />
    </Carts5>
    <Background>
      <img src={Line}/>
    </Background>
   </LineCart>
   
    </Container>
  )
}

export default Frames