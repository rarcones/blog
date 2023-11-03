import React from 'react'
import { Link } from "gatsby"

export default function metropolis() {
  return (
    <body>
        <div>
            <h1>METROPOLIS</h1>
            <h5>La ciudad de Superman</h5>
            <img src="/metropolis.webp"  alt="Una foto de la ciudad de Metropolis"/>
        </div>
        <section>
        <p>La ciudad de Metrópolis es una de las más famosas y avanzadas del mundo, gracias a la presencia y protección de Superman, el héroe más poderoso de la Tierra. Metrópolis tiene una larga historia que se remonta al siglo XVI, cuando fue descubierta por un navegante italiano. Desde entonces, ha sido un centro de comercio, cultura, ciencia y progreso, así como el escenario de muchas aventuras y desafíos para Superman y sus aliados.</p>
        <p>Algunos de los lugares más emblemáticos de Metrópolis son:
            <ul>
	            <li class="list-item"> El Daily Planet, el periódico más prestigioso de la ciudad, donde trabajan Clark Kent (la identidad secreta de Superman), Lois Lane, Jimmy Olsen y Perry White. El edificio del Daily Planet tiene una gran esfera en la azotea con el nombre del diario. </li>
	            <li class="list-item"> Museo de Superman, un lugar dedicado a honrar la vida y las hazañas del héroe, con exhibiciones que muestran sus orígenes, sus enemigos, sus aliados y sus objetos más significativos, como su traje, su capa y su Fortaleza de la Soledad. </li>
                <li class="list-item"> Edificio LexCorp, el conglomerado empresarial más grande e influyente de Metrópolis, dirigido por Lex Luthor, el mayor enemigo de Superman. LexCorp tiene varias divisiones que abarcan desde la tecnología hasta la biología, y es responsable de muchos de los avances y problemas que afectan a la ciudad.</li>
                <li class="list-item"> El Parque Centenario, el mayor espacio verde de Metrópolis, donde se encuentra el monumento a los héroes caídos en la Crisis en Tierras Infinitas, una batalla cósmica que amenazó la existencia de todo el multiverso.</li>
            </ul>
        </p>
        </section>
    <Link to="/">Ir a inicio</Link>
    </body>
  )
}
