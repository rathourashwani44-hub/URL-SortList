"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const page = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState(false)

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }


  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-5'>
      <h1 className='font-bold text-2xl'>generate your short URLs</h1>
      <div className='flex flex-col gap-3'>
        <input type="text" value={url} className='focus:outline-purple-600 bg-white rounded-md  px-4 py-2' onChange={e => { seturl(e.target.value) }} placeholder="Enter your URL" />

        <input type="text" value={shorturl} className='focus:outline-purple-600 px-4 py-2 rounded-md bg-white' onChange={e => { setshorturl(e.target.value) }} placeholder="Enter your preferred short URL text" />

        <button onClick={generate} className='text-white bg-linear-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-md text-lg px-4 py-2.5 text-center leading-5'>Generate</button>
      </div>
      {generated && <><span className='font-bold text-lg'>Your Link</span> <code> <Link target='_blank' href={generated}>{generated}</Link>
        </code></>}
    </div>
  )
}

export default page