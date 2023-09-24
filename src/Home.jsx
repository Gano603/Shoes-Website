import Container1 from './components/Container1'
import Container3 from './components/Container3'
import Container5 from './components/Container5'
import DisplayContainer from './components/DisplayContainer'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import './styles/Home.scss'

const Home = () => {
  const data1 = {images:["src/assets/img/Screen_Shot_2022-01-19_at_1.18.52_PM_540x.png",
  "src/assets/img/Screen_Shot_2022-01-19_at_1.14.50_PM_540x.png",
  "src/assets/img/Screen_Shot_2022-01-19_at_1.20.19_PM_540x.png"],
                title:["Dual-Zippers","All-Terran Tread","Full Grain Leather"],
                description:["Easy on and easy off with our lateral and medial zippers that are featured on both boots.",
                "Our lugs have been engineered to conquer any and all terrains. Cement, grass, gravel, snow, rain...you name it, the CODDI 2 can handle it.",
                "Much like a leather briefcase or a baseball mitt, the more you use the CODDI 2, the better the leather looks and performs."],
              button:["Shop Now ","Shop Now ","Shop Now "]}
  const data2 = {images:["src/assets/img/slateblue_540x.jpg",
  "src/assets/img/grey_540x.jpg",
  "src/assets/img/aqua_540x.jpg"],
                title:[],
                description:[],button:["Slate Blue Hoodie","Glacier Grey Hoodie","Aqua Blue Hoodie"]}
  return (
    <>
      <Container1 />
      <DisplayContainer data={data1}/>
      <Container3 />
      <DisplayContainer data={data2}/>
      <Container5 />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home