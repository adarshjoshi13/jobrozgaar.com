import React,{useEffect} from 'react'
import { EmployerBox, UseBanner ,ApplyProcessArea, NormalForm} from '../Components/export'


function FindAJob() {
  
  return (
   <>
    <UseBanner backgroundImg='/Utility/about.jpg' />
    <EmployerBox imageUrl="/Utility/d.jpg" title="Employee" description="Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos."/>
  <NormalForm />
    {/* <ApplyProcessArea/> */}
   </>
  )
}

export default FindAJob