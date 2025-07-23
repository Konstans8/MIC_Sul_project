"use client";

import Image from 'next/image'
import Link from 'next/link';
import styles from './Header.module.scss';
import Burger from '../Burger/Burger';
import { useState } from 'react';
import { motion } from 'framer-motion'


export default function Header() {

    const [menuActive, setMenuActive] = useState(false)

    return(
        <motion.header className={styles.header}
        initial={{
            // x: -1000,
            opacity: 0
        }}
        animate={{
            // x: 0,
            opacity: 1,
            scale: [1, 2, 2, 1, 1]
        }}
        whileInView={{ opacity: 1 }}
        transition={{
            
        }}
        >
            <div className={styles.logo_container}>
            <Link className={styles.link} href='/'>
                <Image className={styles.logo}
                    src="/new_logo.png"
                    width={50}
                    height={50}
                    alt="Logo"
                />
            </Link>
            </div>
            {/* <div className={styles.media}>
                <a href="tel:+48516272671">+48 516 272 671</a>
            </div> */}
            <button className={styles.open} onClick={() => setMenuActive(!menuActive)}>Menu</button>
            <Burger active={menuActive} setActive={setMenuActive}/>
            <nav className={styles.navigation}>
                <Link className={styles.link} href='/'>GŁÓWNA</Link>
                <Link className={styles.link} href='/history'>HISTORIA</Link>
                <Link className={styles.link} href='/offer'>OFERTA</Link>
                <Link className={styles.link} href='/gallery'>GALERIA</Link>
                <Link className={styles.link} href='/contact'>KONTAKT</Link>
                <a href="tel:+48516272671">+48 516 272 671</a>
            </nav>
        </motion.header>
    )
}