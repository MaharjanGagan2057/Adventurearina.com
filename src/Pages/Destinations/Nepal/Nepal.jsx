import React from 'react'
import Navbar from '../../../components/Navbar'
import Cards from '../../../components/Cards'


const Nepal = () => {
  return (
    <>
      <h2 className="mt-25 text-5xl text-center">NEPAL</h2>
      <Navbar />
      <Cards />
      <Cards />
      <Cards />

      {/* Download ISMT DOCX from public folder */}
      <a
        href="/ismt.docx"
        download="ismt.docx"
        className="inline-block px-4 py-2  text-white rounded transition mt-8"
      >
       <u> Download Itenery</u>
      </a>
    </>
  )
}

export default Nepal