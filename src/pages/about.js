import React from "react"
import Layout from "../components/Layout.js"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function About() {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Looking to email me? Please don't!</h2>
            <p>
              If you REALLY want to email me then I suggest you have a long hard
              look in the mirror.
            </p>
            <p>
              However, if you think your message is really worth my time (e.g.
              gifting me £1 million GBP or more) then please feel free to get in
              touch!
            </p>
            <Link to="/contact" className="btn">
              Contact Us
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="pouring salt"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
