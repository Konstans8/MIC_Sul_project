/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../page.module.scss';
import Arrow from '@/app/components/Arrow/Arrow';

export const metadata = {
  title: 'Prawo cywilne',
  description: 'Kancelaria Zembowicz, Radca Prawny Renata Zembowicz, pomoc prawna, adwokat',
}

export default function ServiceCivil() {
  return (
    <>

      <Arrow />

      <div className={styles.hero}>
        <img className={styles.image} src="" alt="" />
        <img className={styles.image_media_1024} src="" alt="" />
        <img className={styles.image_media_768} src="" alt="" />
        <div className={styles.req}></div>
        <div className={styles.hero_text_services}>
          <h1>Strona w przygotowaniu</h1>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.info_container}>
          <div className={styles.title}>
            <h2></h2>
          </div>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus accusamus sunt unde dolore rem numquam nisi itaque alias ullam perferendis magni earum atque harum, error doloremque. Aliquid suscipit quod quia.
            </p>
          </div>
          
        </div>
        <div className={styles.image}>
            <img className={styles.info_img} src="" alt=""/>
          </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.offerServices}>
        <h2>Nasze Usługi</h2>
        <ul>
          <li>
            <img src="/page2/civil/c1.png" alt="" />
            <h4>
            1
            </h4>
            <p>
            1
            </p>
          </li>
          <li>
          <img src="/page2/civil/c2.png" alt="" />
            <h4>
            1 
            </h4>
            <p>
            1
            </p>
          </li>
          <li>
          <img src="/page2/civil/c3.png" alt="" />
            <h4>
            1
            </h4>
            <p>
            1
            </p>
          </li>
        </ul>
      </div>

      <div className={styles.line}></div>

      <div className={styles.partners}>
        <h2>USŁUGI KTÓRE ŚWIADCZYMY</h2>
        <div className={styles.names}>
          <Link className={styles.service} href='/history/civil_law'>
            <img src="/page2_1.png" alt="civil_law" />
            <img className={styles.image_1024} src="/page2_1media.png" alt="civil_law" />
            <img className={styles.image_320} src="/page2_1media320.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Prawo Cywilne</span>
            </div>
          </Link>
          <Link className={styles.service} href='/history/family_law'>
            <img src="/page2_2.png" alt="family_law" />
            <img className={styles.image_1024} src="/page2_2media.png" alt="civil_law" />
            <img className={styles.image_320} src="/page2_2media320.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Prawo Rodzinne</span>
            </div>
          </Link>
          <Link className={styles.service} href='/offer'>
            <img src="/page2_3.png" alt="veterinary_law" />
            <img className={styles.image_1024} src="/page2_3media.png" alt="civil_law" />
            <img className={styles.image_320} src="/page2_3media320.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Prawo Weterynaryjne</span>
            </div>
          </Link>
          <Link className={styles.service} href='/history/support_in_negotiations'>
            <img src="/page2_4.png" alt="support_in_negotiations" />
            <img className={styles.image_1024} src="/page2_4media.png" alt="civil_law" />
            <img className={styles.image_320} src="/page2_4media320.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Wsparcie w Negocjacjach</span>
            </div>
          </Link>
          <Link className={styles.service} href='/history/preparing_and_giving_opinions'>
            <img src="/page2_5.png" alt="preparing_and_giving_opinions" />
            <img className={styles.image_1024} src="/page2_5media.png" alt="civil_law" />
            <img className={styles.image_320} src="/page2_5media320.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Sporządzanie i Opiniowanie Umów</span>
            </div>
          </Link>
          <Link className={styles.service} href='/history/commercial_law'>
            <img src="/page2_6.png" alt="commercial_law" />
            <img className={styles.image_1024} src="/page2_6media.png" alt="civil_law" />
            <img className={styles.image_320} src="/page2_6media320.png" alt="civil_law" />
            <div className={styles.overlay}>
              <span className={styles.card_title}>Prawo Handlowe i Korporacje</span>
            </div>
          </Link>
        </div>
      </div>

    </>
  )
}