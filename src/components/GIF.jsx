import React from 'react'
import { useState } from 'react'

const GIF = () => {

    const api="bgAmQSX9YTgqnWaPITDEpRQ4lfjlM88a"
    const[gif,setgif]=useState('')
    const[search,setsear]=useState('')
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${api}&tag=${search}`

    const clickhandler=async()=>{

         try{

            const response = await fetch(url)
            const data= await response.json()
            setgif(data.data.images.downsized_large.url)
            console.log("hi")

         }catch(err)
         {
             console.log(err)
         }
       
    }

    const clicksearch=(event)=>{
        setsear(event.target.value)
    }


  return (
    <div className='con'>

               <h2 className="head">A Random Gif</h2>
                <img src={gif} className="im" alt=""></img>
                <input
                type="text"
                id="one"
                className="in"
                placeholder="enter the gif category"
                value={search}
                onChange={clicksearch}
                />
                <button className="bt" onClick={clickhandler}><strong>Generate</strong></button>
    </div>
  )
}

export default GIF