import { Link } from "react-router-dom";
import Card from "../components/Card";
import { getCards } from "../services/api";
import { useEffect } from "react";
export default function Home() {

  

  
  /* TODO: Design and complete the Home page
    - display instructions
    - link to Cards page
    - style as a landing page */
  return <main>
    <h1>Home Page</h1>
    <p>You can view, add, edit and delete cards.</p>
  </main>;
}
