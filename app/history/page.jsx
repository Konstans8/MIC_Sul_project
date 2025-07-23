/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import styles from '../page.module.scss';
import Button from '../components/Button/Button';
import Arrow from '../components/Arrow/Arrow';
import ServicesContainer from '../components/Services_container/ServicesContainer';


export const metadata = {
  title: 'Historia Marianów',
  description: 'Stanisław Papczynski',
}

export default function Services() {

  return (
    <>

      <Arrow />

      <div className={styles.hero}>
        <img className={styles.image} src="/page2/main_2.png" alt="" />
        <img className={styles.image_media_1024} src="/page2/main_2media1200.png" alt="" />
        <img className={styles.image_media_768} src="/page2/main_2media768.png" alt="" />
        <div className={styles.req}></div>
        <div className={styles.hero_text}>
          <h1>Nasza <br /> historia</h1>
        </div>
      </div> 

      <div className={styles.info}>
        <div className={styles.info_container}>
          <div className={styles.title}>
            <h2>Historia <br /> Zgromadzenia <br /> Marianów</h2>
          </div>
          <div className={styles.description}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nulla velit rerum quaerat! Officiis ipsum facere et beatae, commodi nihil facilis molestiae repudiandae atque, voluptatum, aspernatur quod minima ducimus magni?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate aspernatur quas sunt atque nisi, inventore reiciendis officiis. Accusantium mollitia adipisci cupiditate amet cumque, aliquid est sed esse laudantium eos?
            </p>
          </div>
          
        </div>
        <div className={styles.image}>
            <img className={styles.info_img} src="/page2/info_page2.png" alt="justice offer"/>
          </div>
      </div>

      {/* <div className={styles.line}></div> */}

      {/* <ServicesContainer /> */}
    </>
  )
}