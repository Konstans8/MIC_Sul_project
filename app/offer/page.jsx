/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../page.module.scss';
import Arrow from '../components/Arrow/Arrow';

export const metadata = {
  title: 'Obrona Lekarzy Weterynarzy',
  description: 'Błąd lekarski, prawo weterynaryjne',
}

export default function Specialization() {
  return (
    <>

      <Arrow />

      <div className={styles.hero}>
        <img className={styles.image} src="/page3/main_3.png" alt="Medicine cover" />
        <img className={styles.image_media_1024} src="/page3/main_3media1200.png" alt="Medicine cover" />
        <img className={styles.image_media_768} src="/page3/main_3media768.png" alt="Medicine cover" />
        <div className={styles.req}></div>
        <div className={styles.hero_text}>
          <h1>Nasza <br /> Oferta</h1>
        </div>
      </div> 

      <div className={styles.grid}>
        <div className={styles.block_top_left}>
          <div className={styles.title}>
            <h2>Proponujemy różnorodność usług</h2>
          </div>
          <div className={styles.description}>
            <p>
              Witamy na stronie domu rekolekcyjnego w Sulejówku. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis fuga unde. Ipsa minus sit et fuga, nobis eligendi rem beatae aliquam sapiente laboriosam corporis, nihil, veniam vitae iusto! Iusto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis porro asperiores quasi repudiandae recusandae deleniti provident sunt architecto illum aliquid tempore accusamus pariatur vitae, id dignissimos eum temporibus enim eveniet?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iusto temporibus molestias architecto deleniti at culpa. Quod neque sit doloremque sapiente eius ipsam, pariatur nesciunt natus dolorum tenetur! Facilis, ducimus.
            </p>
          </div>
        </div>
        <div className={styles.block_image}>
          <div className={styles.image}>
              <img className={styles.info_img} src="/page3/info_page4.png" alt="doctor image"/>
          </div>
        </div>
        <div className={styles.block_bottom}>
          <h3>Regulamin</h3>
          <p>
          W naszym domu obowiązuje regulamin. Zasady mają ułatwć funkcjonowanie domu i zabezpieczyć pobyt dla gości.
          </p>

          <ul>
            <li>Godziny ciszy: Od 22:00 do 7:00.</li>
            <li>Zakaz palenia i używania narkotyków na terenie całej posesji.</li>
            <li>Nie korzystamy z napoi alkoholowych.</li>
            <li>Zachowujemy porządek z szacunku do siebie i do innych gości.</li>
          </ul>
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.offer}>
        <h2>Spektrum usług w naszym domu rekolekcyjnym</h2>
        <ul>
          <li>
            <img src="/page3/offer1.png" alt="" />
            <strong>
              Kaplica
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet temporibus itaque amet in ea vitae vel voluptate quibusdam architecto beatae est dolore quaerat, magni asperiores aliquam labore facere. Quidem, in!
            </p>
          </li>
          <li>
            <img src="/page3/offer2.png" alt="" />
            <strong>
              Łóżka
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet temporibus itaque amet in ea vitae vel voluptate quibusdam architecto beatae est dolore quaerat, magni asperiores aliquam labore facere. Quidem, in!
            </p>
          </li>
          <li>
          <img src="/page3/offer3.png" alt="" />
            <strong>
              Łazienki
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet temporibus itaque amet in ea vitae vel voluptate quibusdam architecto beatae est dolore quaerat, magni asperiores aliquam labore facere. Quidem, in!
            </p>
          </li>
          <li>
          <img src="/page3/offer4.png" alt="" />
            <strong>
              Refektarz
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet temporibus itaque amet in ea vitae vel voluptate quibusdam architecto beatae est dolore quaerat, magni asperiores aliquam labore facere. Quidem, in!
            </p>
          </li>
          <li>
          <img src="/page3/offer5.png" alt="" />
            <strong>
              Sala konferencyjna
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet temporibus itaque amet in ea vitae vel voluptate quibusdam architecto beatae est dolore quaerat, magni asperiores aliquam labore facere. Quidem, in!
            </p>
          </li>
          <li>
          <img src="/page3/offer6.png" alt="" />
            <strong>
              Parking
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet temporibus itaque amet in ea vitae vel voluptate quibusdam architecto beatae est dolore quaerat, magni asperiores aliquam labore facere. Quidem, in!
            </p>
          </li>
        </ul>
      </div>

      <div className={styles.line}></div>

      <div className={styles.dop}>
        <h4>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit commodi ratione laudantium doloribus soluta, error ut sunt enim aut modi rem, maiores odit porro? Quia exercitationem deserunt corporis sed quasi?
        </h4>
        <a className={styles.btn} href="tel:+48516272671">
          <img src="/phone.svg" alt="telefon" />
        </a>
        <a className={styles.btn} href="mailto: rekolekcje-sulejowek@marianie.pl">
          <img src="/mail.svg" alt="mail" />
        </a>
      </div>
      
      {/* <div className={styles.line}></div> */}

      {/* <div className={styles.partners}>
        <h2>INNE USŁUGI</h2>
          <Link className={styles.btn} href='/history'><img src="/arrow_next.svg" alt="" />Przejdz</Link>
      </div> */}
      
    </>
  )
}