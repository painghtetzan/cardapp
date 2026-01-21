import { Link } from "react-router-dom";
import { deleteCard } from "../services/api";
import { useNavigate } from "react-router-dom";
export default function Card({ card, onDelete, busy }) {
  /* TODO: Complete the Card component
    - display the card image and name
    - display the card ID
    - edit button linking to edit page
    - delete button calling onDelete with the card object
    - style as a card UI */

  const navigate = useNavigate()   

  const handleDelete=()=>{
    deleteCard(card.id)
  }

  const handleEdit=()=>{
    navigate(`/editCard`,{state:card})
  }
  return <div>
    <img src={card.card_pic} />
    <h3> 
      {card.id} | {card.card_name}
    </h3>
    <button onClick={handleDelete}>Delete</button> <button onClick={handleEdit}>Edit</button>
  </div>;
}
