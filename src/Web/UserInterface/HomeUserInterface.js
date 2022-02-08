import Head from "next/head";
import Image from "next/image";
import kebabCase from "@/lib/kebabCase";

export default function HomeUserInterface({ greeting }) {
  return (
    <div className="container">
      <Head>
        <title>Hello | Next JS Custom Architecture</title>
        <meta
          name="description"
          content="This Next JS has been made in such a way as to suit the implementation of clean architecture and Domain Driven Development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">{greeting}</h1>

        <p className="description">
          This Next JS has been made in such a way as to suit the implementation{" "}
          <br />
          of clean architecture and Domain Driven Development. <br />
          <code className="code"><a href="https://www.codesimplicity.com/post/what-is-overengineering/">{kebabCase("Over Engineering")}</a> use only</code>
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h2>Next JS Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
            className="card"
          >
            <h2>Learn Clean Architecture &rarr;</h2>
            <p>
              Learn about Clean Architecture by Robert C. Martin (Uncle Bob).
            </p>
          </a>

          <a
            href="https://en.wikipedia.org/wiki/Domain-driven_design"
            className="card"
          >
            <h2>About Domain Driven Development &rarr;</h2>
            <p>See the Concept of Domain-Driven Design.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h2>Connect with Me on Github &rarr;</h2>
            <p>
              Lets connect and discuss with me on Github
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
