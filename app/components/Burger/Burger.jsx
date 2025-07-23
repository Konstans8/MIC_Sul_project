"use client"

import Link from 'next/link';
import styles from './Burger.module.scss';
import { motion, AnimatePresence } from 'framer-motion'


export default function Burger({active, setActive}) {

    const variants = {
        active: { opacity: 1, x: 0 },
        container: { opacity: 0, x: "-100%" },
    }

    return(
        <>

            <motion.div className={active ? (styles.active) : (styles.container)}
                animate={active ? "active" : "container"}
                variants={variants}
            >
                {/* <button className={styles.exit} onClick={() => setActive(false)}>exit</button> */}
                {/* <nav className={styles.navigation} onClick={e => e.stopPropagation()}> */}
                <nav className={styles.navigation} onClick={e => e.preventDefault()}>
                    <Link className={styles.link} href='/' onClick={() => setActive(false)}>GŁÓWNA</Link> 
                    <Link className={styles.link} href='/history' onClick={() => setActive(false)}>HISTORIA</Link>
                    <Link className={styles.link} href='/offer' onClick={() => setActive(false)}>OFERTA</Link>
                    <Link className={styles.link} href='/gallery' onClick={() => setActive(false)}>GALERIA</Link>
                    <Link className={styles.link} href='/contact' onClick={() => setActive(false)}>KONTAKT</Link>
                    <div className={styles.media}><a href="tel:+48516272671">+48 516 272 671</a></div>
                </nav> 
            </motion.div>

        </>
    )
}




// {active ? (styles.active) : (styles.container)
// className={active ? (styles.active) : (styles.container)}