import type { NextPage } from "next";
import Head from "next/head";
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Joe's Test NextJS Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-8xl font-bold">
          Welcome to Joe's Page
        </h1>

        <p className="mt-3 text-2xl">
          I don't mind smoking meat.
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://facebook.com/joevandyk"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Facebook &rarr;</h3>
            <p className="mt-4 text-xl">See my cool facebook page</p>
          </a>

          <a
            href="https://linkedin.com/in/joevandyk"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Linked In &rarr;</h3>
            <p className="mt-4 text-xl">See my cool linkedin page</p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; joevandyk
        </a>
      </footer>
    </div>
  );
};

export default Home;
