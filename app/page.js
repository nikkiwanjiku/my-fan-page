import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";
import { items } from "./contact/data";
import Footer from "./components/Footer";

export default function Home(){

return(

<main>

<Hero/>

<CardGrid items={items}/>

</main>

)

}

<main>

  <Hero/>

  <CardGrid items={items}/>

  <Footer/>

</main>