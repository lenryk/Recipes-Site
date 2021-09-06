import React from "react"
import Layout from "../components/Layout.js"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <>
      <Layout>
        <main className="page">
          <header className="hero">
            <StaticImage
              src="../assets/images/main.jpeg"
              alt="hero image"
              className="hero-img"
              placeholder="tracedSVG"
              layout="fullWidth"
            />
            <div className="hero-container">
              <div class="hero-text">
                <h1>The Best Recipes 2021</h1>
                <h4>Gordon Ramsey eat ya heart out</h4>
              </div>
            </div>
          </header>
        </main>
      </Layout>
    </>
  )
}
