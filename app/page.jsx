/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.scss';
import { motion } from 'framer-motion';
import Arrow from './components/Arrow/Arrow';

export const metadata = {
  title: 'Dom Rekolekcyjny w Sulejówku',
  description: 'Zgromadzenie Księży Marianów',
}

export default function Home() {
  return (
    <>

      <div className={styles.container}>

        <Arrow />

        <div className={styles.hero}> 
          <img className={styles.image} src="/page1/main_1.png" alt="Dom rekolekcyjny" />
          <img className={styles.image_media_1024} src="/page1/main_1media1200.png" alt="Dom rekolekcyjny" />
          <img className={styles.image_media_768} src="/page1/main_1media768.png" alt="Dom rekolekcyjny" />
          <div className={styles.hero_text}>
            <h1>DOM REKOLEKCYJNY MARIANÓW W SULEJÓWKU</h1>
          </div>
        </div> 

        <div className={styles.info}>
          <div className={styles.info_container}>
            <div className={styles.title}>
              <h2>CZYM SIE ZAJMUJEMY?</h2>
            </div>
            <div className={styles.description}>
              <p>
                Wyznając wiarę w aktywną obecność świętych w naszej codzienności, jesteśmy przekonani, że nasz dom rekolekcyjny cieszy się szczególnym patronatem Sługi Bożego o. Kazimierza od św. Józefa Wyszyńskiego. Postać niezwykła, o wielkich walorach duchowych i intelektualnych, poszedł o. Kazimierz za intuicją o. Założyciela Marianów, św. Stanisława od Jezusa i Maryi Papczyńskiego, by jak on, głosić i czcić Tajemnicę Niepokalanego Poczęcia Najświętszej Maryi Panny. Do Zgromadzenia zostaje przyjęty 18 listopada 1723 roku w kościele św. Stanisława w Rzymie. 
              </p>
            </div>
            
          </div>
          <div className={styles.image}>
              <img className={styles.info_img} src="/page1/page_1_2.png" alt="Lady Law"/>
            </div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.partners}>
          <h2>NASI PATRONOWIE</h2>
          <div className={styles.names_main_page}>
            <a href="https://www.marianie.pl/">
              <img src="/page1/patron1.png" alt="Zgromadzenie Księży Marianów" className={styles.our_partner}/>
            </a>
            <a href="https://sulejowek.marianie.pl/">
              <img src="/page1/patron2.png" alt="Parafia Św. Józefa w Sulejówku" className={styles.our_partner}/>
            </a>
            <a href="https://www.lichen.pl/">
              <img src="/page1/patron3.png" alt="Sanktuarium w Licheniu" className={styles.our_partner}/>
            </a>
          </div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.why}>
          <h2>Dlaczego nasz dom rekolekcyjny?</h2>
          <ul>
            <li>
              <img src="/page1/Component_3.svg" alt="icon" />
              <h3>Bóg:</h3>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis amet nisi minima eius, voluptatem voluptatibus quasi maiores impedit, est ducimus qui ullam suscipit exercitationem consequatur ut magni corrupti repudiandae.
              </p>
            </li>
            <li>
            <img src="/page1/Component_4.svg" alt="icon" />
              <h3>Kościół:</h3>
              <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta praesentium consequatur sit necessitatibus autem quam nam labore, provident quaerat unde eius porro vel nulla hic exercitationem aperiam, quos sed sint.
              </p>
            </li>
            <li>
            <img src="/page1/Component_1.svg" alt="icon" />
              <h3>Dom:</h3>
              <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate, dignissimos quidem quos voluptas ipsam fuga eveniet provident dicta porro, adipisci reprehenderit itaque iste, ab necessitatibus culpa dolorum veritatis amet!
              </p>
            </li>
            <li>
            <img src="/page1/Component_6.svg" alt="icon" />
              <h3>Wiara:</h3>
              <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, sint fugit facilis labore ipsa non voluptatem dicta placeat, nesciunt iusto consectetur consequuntur beatae ipsum quae modi excepturi perferendis, quas reprehenderit.
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.line}></div>

        <div className={styles.info}>
          <div className={styles.info_container}>
            <div className={styles.title}>
              <h2>Kazimierz Wyszyński <br /> Patron Domu</h2>
            </div>
            <div className={styles.description}>
              <p>
              O. Kazimierz zajmuje wybitne miejsce w historii marianów w trudnych czasach panowania dwóch królów z dynastii saskiej, Augusta II i Augusta III. To okres kryzysu i początki rozkładu Rzeczpospolitej, zdominowanej przez wpływy saskie i rosyjskie. W zakonie powierzono mu troskę o młode pokolenie marianów, któremu przybliżał ideał życia o. Założyciela oraz Najświętszą Maryję Pannę, Patronkę i Przewodniczkę Zgromadzenia. Był heroiczny w miłości i wierności Bogu a przykładem własnego życia przyczynił się do podniesienia poziomu życia duchowego marianów. Dążył do uformowania młodych marianów na oddanych Maryi zakonników i roztropnych apostołów w Kościele. Uważał, że życie zakonne ma sens tylko wtedy, gdy zakonnicy będą postępować drogą rad ewangelicznych. O. Juozas Vaišnora twierdził, że „ze szkoły o. Wyszyńskiego doczekał się zakon marianów wzorowych zakonników, którzy później walnie przyczynili się do rozwoju Zakonu.
              </p>
            </div>
            
          </div>
          <div className={styles.image}>
              <img className={styles.info_img} src="/page1/Casimir-Wyszynski_Muzeum-w-Balsamao.jpg" alt="Kazimierz Wyszyński"/>
            </div>
        </div>

      </div>
      
    </>
  )
}
