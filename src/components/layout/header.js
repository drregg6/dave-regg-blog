import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import heroImage1 from "../../images/hero-images/hero-background-1.jpg"
import heroImage2 from "../../images/hero-images/hero-background-2.jpg"
import heroImage3 from "../../images/hero-images/hero-background-3.jpg"
import heroImage4 from "../../images/hero-images/hero-background-4.jpg"

import * as styles from "./header.module.scss"
import * as utilStyles from "../../styles/utils.module.scss"

import Nav from "./nav"

const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4]
let src = heroImages[Math.floor(Math.random() * heroImages.length)]

const Header = ({ image, title, isHome }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  title = title || data.site.siteMetadata.title
  return (
    <header className={`${styles.header}`}>
      <Nav siteTitle={data.site.siteMetadata.title} />
      <div className={`${styles.hero} ${utilStyles.fullWidth}`}>
        {isHome ? (
          <img
            className={`${styles.backgroundImage}`}
            src={src}
            alt="Hero Image"
          />
        ) : (
          <GatsbyImage
            className={`${styles.backgroundImage}`}
            layout="fullWidth"
            aspectRatio={2 / 1}
            alt="Post Hero Image"
            image={image}
            formats={["auto", "webp", "avif", "jpg"]}
          />
        )}
        <div className={`${styles.titleWr}`}>
          <h1 className={`${utilStyles.title} ${styles.splashTitle}`}>
            {title}
          </h1>
          {isHome && (
            <Link
              to="/blog"
              className={`${utilStyles.button} ${utilStyles.mt2}`}
            >
              Read more &rArr;
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
