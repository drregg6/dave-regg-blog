import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import * as styles from "./header.module.scss"
import * as utilStyles from "../../styles/utils.module.scss"

import Nav from "./nav"

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
  const heroImages = [
    "../../images/hero-images/hero-background-1.jpg",
    "../../images/hero-images/hero-background-2.jpg",
    "../../images/hero-images/hero-background-3.jpg",
    "../../images/hero-images/hero-background-4.jpg",
  ]
  const src = heroImages[Math.floor(Math.random() * heroImages.length)]
  return (
    <header className={`${styles.header}`}>
      <Nav siteTitle={title} />
      <div
        className={`${styles.hero} ${utilStyles.fullWidth}`}
        style={{ display: "grid" }}
      >
        {isHome ? (
          <StaticImage
            style={{
              gridArea: "1/1",
              maxHeight: "74vh",
            }}
            layout="fullWidth"
            aspectRatio={2 / 1}
            alt="Hero Image"
            src="../../images/hero-images/hero-background-4.jpg"
            formats={["auto", "webp", "avif", "jpg"]}
          />
        ) : (
          <GatsbyImage
            style={{
              gridArea: "1/1",
              maxHeight: "74vh",
            }}
            layout="fullWidth"
            aspectRatio={2 / 1}
            alt="Post Hero Image"
            image={image}
            formats={["auto", "webp", "avif", "jpg"]}
          />
        )}
        <div
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            // This centers the other elements inside the hero component
            placeItems: "center",
            display: "grid",
          }}
        >
          {/* Any content here will be centered in the component */}
          <h1 className={`${utilStyles.title} ${utilStyles.mb2}`}>{title}</h1>
        </div>
      </div>
    </header>
  )
}

export default Header

{
  /* <div
        className={`${styles.hero} ${utilStyles.fullWidth} ${utilStyles.center}`}
        style={{
          background: `rgba(0,0,0,0.2) url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "darken",
        }}
      >
        <div className={`${utilStyles.jcenter}`}>
          {!isPost && (
            <h1 className={`${utilStyles.title} ${utilStyles.mb2}`}>
              {title ? title : siteTitle}
            </h1>
          )}
          {isHome && (
            <Link to="/blog" className={`${utilStyles.button}`}>
              Read more &rArr;
            </Link>
          )}
        </div>
      </div> */
}
