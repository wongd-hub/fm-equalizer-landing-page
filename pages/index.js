import Head from 'next/head'
import Image from 'next/image'
import bgDesktop from '../public/assets/bg-main-desktop.png'
import bgMobile from '../public/assets/bg-main-mobile.png'
import bgTablet from '../public/assets/bg-main-tablet.png'
import logoSvg from '../public/assets/logo.svg'
import bgPattern1 from '../public/assets/bg-pattern-1.svg'
import bgPattern2 from '../public/assets/bg-pattern-2.svg'
import mobilePrev from '../public/assets/illustration-app.png'
import appleIcon from '../public/assets/icon-apple.svg'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
        <title>Frontend Mentor | Equalizer landing page</title>
      </Head>

      <Image
        src={bgDesktop}
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
        style={{position: 'fixed'}}
        priority
      />

      <main className={styles.main}>
        <body>
          <section className={styles.landingSection}>
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
            <div className="adornmentContainer">
              <div className={styles.topAdornment}>
                <Image
                  src={bgPattern1}
                  alt=""
                />
              </div>
            </div>
          </section>
          <section className={styles.landingSplash}>
            <div className={styles.mobilePreview}>
              <div className={styles.mobilePreviewContainer}>
                <Image
                  src={mobilePrev}
                  className={styles.mobilePrevImg}
                  alt=""
                />
              </div>
            </div>
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
      </main>

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
    </div>
  )
}
