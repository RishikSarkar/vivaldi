import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import Songs from '../components/Songs'

export default function Home() {
  const [predictionString, setPredictionString] = useState(null);

  return (
    <div>
      <Head>
        <title>Vivaldi</title>
        <meta name="description" content="Vivaldi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
    <Main setPredictionString={setPredictionString} />
    <Songs predictionString={predictionString} />
    </div>
  )
}
