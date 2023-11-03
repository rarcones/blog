import React from 'react'
import { Link } from "gatsby"

export default function wakanda() {
  return (
    <body>
        <div>
            <h1>WAKANDA</h1>
            <h5>El pais de Black Panther</h5>
            <img src="/wakanda.jpg"  alt="Una foto de la ciudad de Metropolis" width="1024" height="800" />
        </div>
        <section>
        <p>Un río serpentea por el centro de la extensa capital de Wakanda, Birnin Zana, repleta de rascacielos, una metrópolis que está completamente envuelta por una cadena montañosa. Wakanda se ubica en el este de África. Según algunas fuentes, Wakanda se sitúa  en el extremo norte del lago Turkana, entre Sudán del Sur, Uganda, Kenia y Etiopía</p>
        <p>Es un país altamente desarrollado, que se describe como la nación tecnológicamente más avanzada del planeta. Su principal recurso es el vibranium, un metal extraterrestre que tiene propiedades únicas, como absorber el sonido y las vibraciones. El vibranium fue descubierto por el primer rey de Wakanda, Bashenga, hace unos 10 000 años, cuando un meteorito compuesto por este metal cayó en el territorio de Wakanda. Desde entonces, los wakandianos han usado el vibranium para desarrollar su ciencia, medicina, arquitectura, armamento y cultura.</p>
        <p>Wakanda tiene tres idiomas oficiales: el wakandano, el yoruba y el hausa. El wakandano es el idioma nativo de Wakanda, que se basa en el bantú. El yoruba y el hausa son lenguas africanas que se hablan en varios países vecinos.</p>
        <p>Es una monarquía constitucional, donde el rey o la reina es el jefe de estado y el jefe de gobierno. El rey o la reina también es el líder espiritual de Wakanda, y el portador del manto de la Pantera Negra, un título hereditario que otorga habilidades sobrehumanas al consumir una hierba en forma de corazón que crece gracias al vibranium. El rey o la reina es asistido por un consejo de ancianos, que representa a las diferentes tribus de Wakanda, y por el Dora Milaje, una fuerza de élite compuesta por mujeres guerreras que sirven como guardaespaldas y esposas potenciales del monarca</p>
        </section>
    <Link to="/">Ir a inicio</Link>
    </body>
  )
}
