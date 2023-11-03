import React from 'react'
import { Link } from "gatsby"

export default function gotham() {
  return (
    <body>
        <div>
            <h1>GOTHAM</h1>
            <h5>La ciudad de Batman</h5>
            <img src="/gotham.webp"  alt="Una foto de la ciudad de Metropolis"/>
        </div>
        <section>
        <p>Gotham City es la ciudad donde vive y actúa el superhéroe Batman. Se encuentra en el estado de Nueva Jersey, en los Estados Unidos, y tiene una población de más de 8 millones de habitantes1. </p>
        <p>Es una ciudad con una larga historia, fundada hace unos 200 años por varias familias poderosas, entre ellas los Wayne, los Kane, los Elliot y los Dumas. Sin embargo, también es una ciudad plagada de crimen, corrupción y locura, que ha sufrido varios desastres y amenazas a lo largo de los años. </p>
        <p>Algunos de los lugares que se pueden visitar en Gotham son:
            <ul>
	            <li class="list-item"> La Batseñal, el símbolo de la alianza entre el comisario Gordon y Batman, que se proyecta en el cielo nocturno cuando la ciudad necesita la ayuda del Caballero Oscuro. Se encuentra en la azotea del Departamento de Policía de Gotham. </li>
	            <li class="list-item"> La Mansión Wayne, la residencia de la familia Wayne, una de las más ricas y poderosas de Gotham. La mansión alberga un gran número de obras de arte, antigüedades y secretos, entre ellos la entrada a la Batcueva, el centro de operaciones de Batman. </li>
                <li class="list-item"> El Asilo Arkham, es el hospital psiquiátrico donde se encierra a los criminales más peligrosos y perturbados de Gotham, como el Joker, el Pingüino, Dos Caras o el Espantapájaros. El asilo tiene fama de ser un lugar de horror y locura, donde los internos sufren abusos y experimentos.</li>
                <li class="list-item"> El Teatro Monarch, el teatro más famoso y prestigioso de Gotham, donde se representan obras de teatro, óperas y musicales. Fue el lugar donde los padres de Bruce Wayne fueron asesinados cuando salían de ver la película El Zorro, lo que marcó el destino de Bruce como Batman.</li>
            </ul>
        </p>
        </section>
        
    <Link to="/">Ir a inicio</Link>    
    </body>
  )
}
