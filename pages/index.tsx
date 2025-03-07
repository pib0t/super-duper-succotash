import Head from 'next/head'
import { Button } from '../components/Button'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <div className="relative">
      <Header title="Next.js Starter" />
      <Head>
        <title>Next.js TypeScript Starter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center p-24 pt-32">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to <a href="https://nextjs.org" className="text-blue-600 hover:text-blue-800">Next.js!</a>
        </h1>
        <p className="text-lg mb-8">With Tailwind CSS</p>
        <div className="flex gap-4">
          <Button primary label="Primary Button" />
          <Button label="Secondary Button" />
        </div>
      </main>
    </div>
  )
}
