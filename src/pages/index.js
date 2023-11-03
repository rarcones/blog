import * as React from "react"
import './style/style.css'
import { Link } from "gatsby"

export default function Home() {
  return (
    <body>
      <h1>Blog personal de viajes</h1>
      <img src="plane.webp"  alt="Avion volando"/>
      <section>
        <div>
          <h2>Presentacion:</h2>
          <p>Bienvenido a mi página personal sobre viajes en el mundo fantástico.</p>
          <p>Aquí encontrarás ciudades y lugares emblematicos para visitar, si decides acercarte a ellos.</p>
          <p>Aviso: no hay billete de avión ni medio de transporte que te permita llegar a estos lugares, tendrás que usar la imaginación, los comics y las peliculas si quieres pasar por alli... ¡disftuta!</p>
        </div>
      </section>
      <section>
        <div>
          <h2>Mis viajes:</h2>
          <ul>
	        <li class="list-item"><Link to="gotham">Enlace a entrada de Gotham</Link> </li>
	        <li class="list-item"><Link to="metropolis">Enlace a entrada de Metrópolis</Link></li>
          <li class="list-item"><Link to="wakanda">Enlace a entrada de Wakanda</Link></li>
          </ul>
        </div>
      </section>
      <footer>
        <small>Ricardo Arcones Fernandez 2023</small>
      </footer>
    </body>)
}
