import React from 'react'
import { useQuery } from 'react-query';
import { CircularProgress } from '@mui/material'
import axios from 'axios';
import Head from 'next/head';

console.log(process.env.apiLink);

export default function Portofolio() {
  const { data , isLoading , isError ,error} = useQuery("portofolio", async () => {
    return await axios.get("https://portofolionodejs-production.up.railway.app/api//portofolio").then((res) => res.data);
});


  return (
    <>
    <Head>
      <title>MyPortofolio</title>
  </Head>
    <section id="portfolio" className="portfolio">
        <div className="contenido-seccion">
            <h2>PORTFOLIO</h2>
            <div className="galeria">
            {isLoading ? <div className='Loading'><CircularProgress/> </div>  : "" }
            {isError? <div className='error'>{error.message}</div>:""}
              {
                data?.map((item)=>(
                  <div key={item._id} >
                  <div className="proyecto">
                  <div>
                    <img src={item.photo} alt=""/>
                    <div className="overlay">
                        <h3 style={{width:"100%"}}>{item.name}</h3>
                        <p>{item.desc}</p>
                    </div>
                </div>
                   <a href={`${item.link}`}target="_blank">
                        <button className='portfolioBut'>Live Demo</button>
                  </a>
                  </div>
                  </div>
                ))
              }

               </div>
        </div>
    </section>
    </>
  )
}


