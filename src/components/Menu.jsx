import { useState } from 'react'
import MenuCard from './MenuCard'
import './menu.css'

export default function Menu() {
  const [coffees, setCoffees] = useState()
  const [message, setMessage] = useState('Welcome to the Beau Café')
  const getCoffees = (temp) => {
    setMessage('Loading...')
    fetch(`https://api.sampleapis.com/coffee/${temp}`)
      .then(res => res.json())
      .then(setCoffees)
      .catch(setMessage)
  }
  return (
    <article>
      <div>
        <button onClick={() => getCoffees('hot')}>Hot Coffees</button>
        <button onClick={() => getCoffees('iced')}>Iced Coffees</button>
      </div>
      {!coffees
        ? <h2>{message}</h2>
        : <section className='coffee-container'>
          {coffees.map(coffee => (
            <MenuCard key={coffee.id}
              description={coffee.description}
              title={coffee.title}
              image={coffee.image}
            />
          ))}
        </section>
      }
    </article>
  );
}
