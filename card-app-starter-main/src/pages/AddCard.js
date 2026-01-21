import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/CardForm";
import { addCard } from "../services/api";


export default function AddCard() {
  /* TODO: Complete the AddCard page
    - display a form for adding a new card (use the CardForm component to display the form)
    - handle form submission to call addCard API
    - handle busy and error states
    - style as a form UI */
    // addCard({"name":"broccoli","pic":"https://cards.scryfall.io/normal/front/d/5/d573ef03-4730-45aa-93dd-e45ac1dbaf4a.jpg"})
    const onAdd = async (name,pic)=>{
    //  await addCard({"name":name,"pic":pic})
      addCard({"name":name,"pic":pic})
    }

  return <main>
    <h1>Add Card</h1>
    <CardForm  buttonname="Add" onSubmit={onAdd}  />
  </main>;
}
