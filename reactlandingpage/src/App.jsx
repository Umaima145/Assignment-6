import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Slider from './Slider/Slider'
import Academics from './Academics/Academics'
import CardAca from './CardAca/CardAca'
import Welcome from './Welcome/Welcome'
import Section from './Section/Section'
import Campus from './Campus/Campus'
import Button from './Button/Button'
import Card from './Card/Card'
import Pink from './Pink/Pink'
import Carousel from './Carousel/Carousel'
import What from './What/What'
import End1 from './End1/End1'
import Footer from './Footer/Footer'



const Banner= ()=>{
  return(
<>
<div className='banner'>
  
  <div className='svgp'>
  
   <p> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone">
   <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg> &nbsp; (+1) 3344 999 999</p>
   
  
  </div>


    <div className='svgm'> 
   <p>   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
   &nbsp; info@reactheme.com </p>
    </div>

   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" fill="white">
   <path d="M22.675 0h-21.35C.596 0 0 .596 0 1.326v21.348C0 23.404.596 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.408c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.098 2.795.143v3.24l-1.918.001c-1.504 0-1.794.714-1.794 1.762v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.404 24 24 23.404 24 22.674V1.326C24 .596 23.404 0 22.675 0z"/>
</svg>


   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" fill="white">
   <path d="M23.444 4.834c-.835.37-1.73.62-2.675.732a4.694 4.694 0 0 0 2.048-2.585c-.902.534-1.9.922-2.965 1.13a4.677 4.677 0 0 0-7.96 4.265c-3.888-.194-7.336-2.058-9.637-4.886a4.666 4.666 0 0 0-.633 2.352c0 1.62.826 3.05 2.082 3.885a4.654 4.654 0 0 1-2.116-.586v.059a4.682 4.682 0 0 0 3.752 4.584 4.68 4.68 0 0 1-2.11.08 4.688 4.688 0 0 0 4.377 3.257 9.386 9.386 0 0 1-5.805 2.003c-.377 0-.749-.022-1.115-.065a13.234 13.234 0 0 0 7.159 2.096c8.587 0 13.287-7.11 13.287-13.287 0-.202-.005-.403-.014-.604a9.52 9.52 0 0 0 2.339-2.428z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" fill="white">
   <path d="M22.23 0H1.77C.792 0 0 .774 0 1.728v20.544C0 23.226.792 24 1.77 24h20.46C23.208 24 24 23.226 24 22.272V1.728C24 .774 23.208 0 22.23 0zM7.063 20.451H3.765V9H7.06v11.451h.003zM5.412 7.588c-1.074 0-1.947-.874-1.947-1.947 0-1.073.874-1.947 1.947-1.947s1.947.874 1.947 1.947c0 1.073-.874 1.947-1.947 1.947zm15.039 12.863h-3.3v-5.615c0-1.338-.027-3.061-1.863-3.061-1.864 0-2.15 1.454-2.15 2.956v5.72H9.847V9h3.165v1.561h.045c.442-.835 1.52-1.713 3.129-1.713 3.34 0 3.96 2.2 3.96 5.064v6.539h-.001z"/>
</svg>

   
  </div>
  <Navbar />
  <Slider />
  <Academics />
  <CardAca title="Let's Talk Science" imageUrl="1.045ce5893b04f4bde993.png"/>
  <CardAca title="Innovative Courses" imageUrl="2.ec9d013b7d4f44fa4112.png" />
  <CardAca title="Cloud Storage" imageUrl="3.0cf44447da5e6fb16e49.png" />
  <CardAca title="Online Education" imageUrl="4.3d31b426e478a4d304b8.png"/>
  <Welcome />
  <Campus />
  <Section />
  <Button head="More About Campus Life "/>
  <Card />
  <Button head="View All Courses "/>
  <Pink />
  <Carousel />
  <What />
  <Academics heading="Echooling News and Blogs" />
  <End1 />
  <Footer />
</>

  )
  
 }
 
 export default Banner