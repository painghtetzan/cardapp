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
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    const [busy,setBusy] = useState(null)
    useEffect(()=>{
      async function loadcards(){
      try{
        const allcards = await getCards()
        if (!allcards){
          setError("Error retrieving database!")
        }else{
        setCards(allcards)
        console.log(cards)
        }
      }catch(error){
        setError(error.message || 'something went wrong')
      }finally{
        setLoading(false)
      }}

      loadcards()
    },[])
    

    const handleDelete=async(id)=>{
      setBusy(id)
      try{
        
       await deleteCard(id)
       setCards(prev =>prev.filter(card=>card.id!==id))
      }catch(error){
        alert(error)
      }finally{
        setBusy(null)
      }
    }

    if(loading){
      return <h3>Cards are loading. Please wait.</h3>
    }else if(error){
      return <h3>{error}</h3>
    }
    else

  return <main>
    
    {cards.map(card=>
       (<Card card={card} key={card.id} onDelete={handleDelete} busy={busy} />)
    )}
    
  </main>;
}
