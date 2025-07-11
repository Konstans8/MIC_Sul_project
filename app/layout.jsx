// import { Raleway } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import './globals.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const montserrat = Montserrat({ 
  weight: ['300'],
  subsets: ['latin'] 
})
// const raleway = Raleway({ 
//   weight: ['400'],
//   subsets: ['latin'] 
// })

export const metadata = {
  title: 'Rekolejcje w Sulejówku',
  description: 'Dom rekolekcyjny Zgromadzenia Księży Marianów w Sulejówku',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </head>
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
