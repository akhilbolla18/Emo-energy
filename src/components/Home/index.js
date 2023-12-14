import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <>
    <Navbar />
    <div className="home-container">
      <div className='card'>
     <div>
     <p className='about'>Who we are?</p>
     <p className='title'>EMO ENERGY</p>
     <p className='discription'>EMO’s Mission is to Design, Develop & Commercialize Cutting Edge Technology for the Masses with a focus on Safety, Reliability & Performance. EMO is a team of world class Engineers & Designers that are Obsessed with the Idea of Enabling Electric Mobility for all. EMO strives to achieve the Impossible by fusing Hardware, Software & Experience to Build Products that stand the Test of Time.</p>
     </div>
     <div>
      <img src = "https://res.cloudinary.com/dumbnbfci/image/upload/v1660885924/samples/imagecon-group.jpg" alt = "emo" className=' image'/>
     </div>
     </div>
    </div>
  </>
)

export default Home