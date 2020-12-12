import Head from 'next/head'
import Card from '../components/card.js'

export default function Home() {
  return (
    <div className="center flex-col min-h-screen px-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="center flex-col flex-1 py-20">
        <h1 className="text-center m-0 text-7xl">
          Welcome to <a href="https://nextjs.org" className="hover:underline focus:underline active:underline text-next-blue no-underline">Next.js!</a>
        </h1>

        <p className="text-center text-2xl">
          Get started by editing{' '}
          <code className="font-mono text-lg rounded-md bg-gray-50 p-3">pages/index.js</code>
        </p>

        <div className="center mt-12 flex-wrap w-full flex-col md:max-w-3xl md:flex-row">
          <Card href="https://nextjs.org/docs">
            <h3 className="text-2xl m-0 mb-4">Documentation &rarr;</h3>
            <p className="m-0 text-xl">Find in-depth information about Next.js features and API.</p>
          </Card>

          <Card href="https://nextjs.org/learn">
            <h3 className="text-2xl m-0 mb-4">Learn &rarr;</h3>
            <p className="m-0 text-xl">Learn about Next.js in an interactive course with quizzes!</p>
          </Card>

          <Card href="https://github.com/vercel/next.js/tree/master/examples">
            <h3 className="text-2xl m-0 mb-4">Examples &rarr;</h3>
            <p className="m-0 text-xl">Discover and deploy boilerplate example Next.js projects.</p>
          </Card>

          <Card
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            <h3 className="text-2xl m-0 mb-4">Deploy &rarr;</h3>
            <p className="m-0 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </Card>
        </div>
      </main>

      <footer className="center w-full h-24 border-0 border-t border-gray-300 border-solid">
        <a
          className="center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Khushraj :)
        </a>
      </footer>
    </div>
  )
}
