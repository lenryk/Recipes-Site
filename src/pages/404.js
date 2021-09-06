import React from "react"
import Layout from "../components/Layout.js"

function Error() {
  return (
    <Layout>
      <main className="error-page">
        <h1>404</h1>
        <h3>Page not found 😱</h3>
      </main>
    </Layout>
  )
}

export default Error
