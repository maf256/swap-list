import { useState } from 'react'
import styled from 'styled-components'

export default function App() {
  const [carts, setCarts] = useState({
    cart1: ['Potatoes', 'Bananas', 'Carrots', 'Oranges', 'Kale', 'Pineapple'],
    cart2: ['Apples', 'Beans', 'Grapes', 'Spinnach', 'Pears', 'Broccoli']
  })

  const handleOnClick = () => {
    let cart1 = [...carts.cart1]
    let cart2 = [...carts.cart2]
    for (let i = 0; i < cart1.length; i = i + 2) {
      [cart1[i], cart2[i]] = [cart2[i], cart1[i]]
    }

    setCarts({ cart1, cart2 })
  }

  return (
    <Container>
      <Cart title='Cart 1' cart={carts.cart1} />
      <Button onClick={handleOnClick}>Swap Odds</Button>
      <Cart title='Cart 2' cart={carts.cart2} />
    </Container>
  )
}

const Button = styled.button`
  margin: auto 40px;
  height: 50px;
  width: 100px;
  border-radius: 5px;
`

const Container = styled.div`
  display: flex;
  width: 500px;
  height: 400px;
`
function Cart ({title,cart}){
  return (
    <CartContainer >
      <h2>{title}</h2>
      <ol>
        {
          cart.map((item,inx) => (
            <li key={inx}>{item}</li>
          ))
        }
      </ol>

    </CartContainer>
  )
}

const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 20px;
  width: 200px;
  height: 100%;
  li {
    margin-top: 15px;
  }
`