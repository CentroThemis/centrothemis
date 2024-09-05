import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss'

import * as React from "react"
import ComNavbar from '../components/comNavbar';
import { Container } from 'react-bootstrap';


const IndexPage = () => {
  return (
    <body>

      {/* Navbar */}
      <ComNavbar/>

      {/* Banner */}
      <div className='banner'>
        <Container>
          <p>Adipisicing do anim exercitation qui anim non quis magna fugiat cillum laborum laborum tempor deserunt. Incididunt consectetur enim incididunt incididunt nisi. Nulla amet qui pariatur tempor culpa ipsum commodo tempor ut quis consequat id consequat veniam. Nostrud eiusmod qui deserunt minim enim excepteur est consectetur culpa. Proident cillum sit occaecat non fugiat irure nulla irure magna esse excepteur laboris amet officia. Tempor et eu amet culpa quis esse voluptate. Eu aute ut minim ipsum sit ipsum.

  Nostrud ex excepteur ex et irure sunt. Minim ea irure do sint sunt elit cillum non enim. Laboris adipisicing ipsum sint duis laborum laboris fugiat deserunt sit tempor proident occaecat.

  Sunt consectetur minim nulla aliqua deserunt Lorem tempor. Duis qui reprehenderit commodo labore deserunt officia et excepteur officia ea. Incididunt magna dolore ex exercitation velit. Aliqua quis dolore enim ad nulla ullamco ipsum eu. Reprehenderit non esse adipisicing nostrud culpa laboris sunt amet ipsum eiusmod est. Officia ipsum et excepteur cillum aliqua velit reprehenderit esse incididunt.

  Duis cillum dolor enim qui. Deserunt aute labore enim occaecat proident exercitation mollit consequat fugiat. Adipisicing nisi sint quis sint cillum in aliquip aliqua do ullamco non reprehenderit ullamco. In officia nisi officia duis eiusmod reprehenderit.

  Elit et aliqua incididunt minim deserunt non esse cupidatat proident ipsum aute. Ex cillum in proident pariatur eu sint cillum cillum duis ex ad aute nisi dolor. Amet anim reprehenderit ipsum pariatur consequat.</p>
        </Container>
      </div>

      {/* Beneficios */}
      <div className='beneficios'>
        <br/>
        <Container>
          <p>Nulla nulla deserunt in pariatur qui consectetur incididunt minim ad esse ut aliqua. Quis culpa officia ex nostrud amet incididunt officia id eu fugiat Lorem. Exercitation laboris minim id commodo fugiat officia enim eiusmod minim. Mollit elit minim laboris deserunt quis eu consequat elit aliqua eiusmod cupidatat mollit incididunt esse. Incididunt sit eu nostrud ea proident Lorem eiusmod ad officia ea tempor fugiat nostrud. Do nisi qui consequat officia duis sint esse in sint aute veniam.

Nulla velit aute aliquip officia est duis. Aliquip eu veniam labore minim elit do sunt consectetur deserunt labore. Enim ex aute ut sit proident incididunt Lorem duis officia nisi nisi incididunt anim. Commodo ea cupidatat amet nisi quis dolor est ipsum eiusmod magna sit sint incididunt eiusmod.

In veniam est mollit commodo sit nostrud sint irure mollit aliqua est consequat. Sint qui laborum consequat enim aliquip ad nisi ullamco. Cillum veniam tempor sit Lorem aliquip in aliqua pariatur. Occaecat consequat consequat proident ad minim.</p>
        </Container>
      </div>
      {/* Ofrecemos */}

      {/* Tipos de terapia */}

      {/* Profesionales */}

      {/* Formulario */}

      {/* Footer */}

    </body>
  )
}

export default IndexPage

export const Head = () => <title>Bienvenido a Centro Themis</title>
