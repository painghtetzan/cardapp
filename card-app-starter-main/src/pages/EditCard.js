import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import { getCards, updateCard } from "../services/api";
import { useLocation } from "react-router-dom";
export default function EditCard() {
  /* TODO: Complete the EditCard page
    - display a form for editing a card (use the CardForm component to display the form)
    - handle form submission to call updateCard API
    - handle loading, busy, and error states
    - style as a form UI */
    const {state} = useLocation()
    const  handleUpdateCard = async(name,pic)=>{
      updateCard(state.id,{"name":name,"pic":pic})
    }
  
  return <main>
    <h1>Edit Page</h1>
    <CardForm values={state} buttonname="Update" onSubmit={handleUpdateCard} />
  </main>;
}
