import React from "react"
import Layout from "../components/Layout.js"

function Contact() {
  return (
    <Layout>
      <main className="page">
        <section className="contact=page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>Have a recipe you want to let us know about?</p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="name">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
                <button type="submit" className="btn block">
                  Submit
                </button>
              </div>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
