import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";

export default function CardList() {
  /* TODO: Complete the CardList page
    - display a list of cards (use the Card component to display each card)
    - delete button calling handleDelete with the card object
    - handle loading, busy, and error states
    - style as a grid UI */
    const [cards,setCards] = useState([])
    useEffect(()=>{
      async function loadcards(){
        const allcards = await getCards()
        console.log(allcards)
        setCards(allcards)
      }
      loadcards()
    },[])
    


  return <main>
    <h1>All cards</h1>
    {cards.map(card=>
       (<Card card={card} />)
    )}
    
  </main>;
}
