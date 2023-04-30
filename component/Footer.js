import React from 'react'
import { Facebook , LinkedIn, WhatsApp, GitHub, Twitter , KeyboardDoubleArrowUp} from '@mui/icons-material';
import { useQuery } from 'react-query';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import Link from 'next/link';
export default function Footer() {
  const { data, isLoading, isError, error, refetch } = useQuery(
    "platforme",
    async () => {
      return await axios
        .get(`${process.env.customKey}/platform`)
        .then((res) => res.data);
    })

    
  return (
     <footer>
    <Link href="/#About" className="arriba">
        <KeyboardDoubleArrowUp />
    </Link>
            {isLoading ? <div className='Loading'><CircularProgress/> </div>  : "" }
            {isError? <div className='error'>{error.message}</div>:""}
    {data?.map((dat)=>(
    <div key={dat._id} className="redes">
      <a href={`${dat?.facebook}`} target="_blank">
        <Facebook />
      </a>
      <a href={`${dat.linkedin}`} target="_blank">
        <LinkedIn />
      </a>
      <a href={`${dat.github}`} target="_blank">
        <WhatsApp />
      </a>
      <a href='https://www.twitter.com' target="_blank">
        <Twitter />
      </a>
      <a href={`${dat.whatsup}`} target="_blank">
        <GitHub />
      </a>
        
    </div>
    ))}

</footer>
  )
}
