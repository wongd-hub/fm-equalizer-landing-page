import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import bgDesktop from '../public/assets/bg-main-desktop.png'
import bgMobile from '../public/assets/bg-main-mobile.png'
import bgTablet from '../public/assets/bg-main-tablet.png'
import logoSvg from '../public/assets/logo.svg'
import bgPattern1 from '../public/assets/bg-pattern-1.svg'
import bgPattern2 from '../public/assets/bg-pattern-2.svg'
import mobilePrev from '../public/assets/illustration-app.png'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [vsize, setVSize] = useState([0, 0]) // State used to track viewport size
  const [device, setDevice] = useState('desktop')

  // Listen for window resize
  useEffect(() => {
    setVSize([window.innerWidth, window.innerHeight])
    window.addEventListener('resize', () => {
      setVSize([window.innerWidth, window.innerHeight])
    });
    return () => window.removeEventListener('resize', () => setVSize([window.innerWidth, window.innerHeight]));
  }, []);


  // Change state if window is certain size
  useEffect(() => {
    if (vsize[0] > 768) {
      setDevice('desktop')
    } else if (vsize[0] > 375) {
      setDevice('tablet')
    } else {
      setDevice('phone')
    }
  }, [vsize]);

  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
        <title>Frontend Mentor | Equalizer landing page</title>
      </Head>

      
      <main className={styles.main}>
        <body>
          <section className={styles.landingSection}>
            <div className={styles.landingTopSection}>
              <div className={styles.landingText}>
                <div className={styles.logo}>
                  <Image
                    src={logoSvg}
                    alt=""
                  />
                </div>
                <div className={styles.landingTextContainer}>
                  <h1 className={styles.title}>We make your music sound extraordinary.</h1>
                  <p className={styles.landingPara}>A system audio equalizer specifically designed for Android and iOS. Freely tune the 
                  way your music sounds with a professional grade parametric EQ & volume mixer. Control 
                  bass, mids, treble, gain control, reverb, and more!</p>
                </div>
              </div>
              <div className={styles.adornmentContainer}>
                {
                  device == 'mobile' 
                    ? (<></>) 
                    : device == 'desktop' 
                        ? (
                            <Image
                              src={bgPattern1}
                              alt=""
                              layout='fixed'
                              width={312}
                              height={468}
                            />
                        )
                        : (
                            <Image
                              src={bgPattern1}
                              alt=""
                              layout='fixed'
                              width={266.7}
                              height={400}
                            />
                        )
                }

              </div>
            </div>
          </section>
          <section className={styles.landingSplash}>
            <div className={styles.mobilePreview}></div>
            <div className={styles.buyCard}>
              <h1 className={styles.buyCardTitle}>Premium EQ</h1>

              <p className={styles.copy}>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take 
              your listening experience to a whole new level and access all our incredible features!</p>

              <div className={styles.priceContainer}>
                <span className={styles.price}>$4</span> <span className={styles.priceCopy}>/ month</span>
              </div>

              <button className={styles.iosDl}>
                <div className={styles.appleIcon}></div>
                <span className={styles.buttonText}>iOS Download</span>
              </button>
              <button className={styles.andDl}>
                <div className={styles.androidIcon}></div>
                <span className={styles.buttonText}>Android Download</span>
              </button>
            </div>
            <div className={styles.splashBg}>
              <div className={styles.midAdornment}>
                <Image
                  src={bgPattern2}
                  alt=""
                />
              </div>
            </div>
          </section>

        </body>
        <footer className={styles.footer}>
          <div className={styles.logoFooter}>
            <Image
              src={logoSvg}
              alt=""
            />
          </div>
          <div className={styles.footerText}>
              All rights reserved © Equalizer 2021
              Have any problems? Contact us via social media or email us at <strong className={styles.emailLink}>equalizer@example.com</strong>
          </div>
          <div className={styles.socials}>
            <div className={styles.facebookIcon}></div>
            <div className={styles.instagramIcon}></div>
            <div className={styles.twitterIcon}></div>
          </div>
        </footer>
      </main>
    </div>
  )
}
