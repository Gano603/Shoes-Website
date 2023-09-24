import Home_display_card from './Home_display_card'

const DisplayContainer = ({data}) => {
  return (
    <div className="second-container">
        <div className="card-display">
          <Home_display_card 
          imageSrc={data.images[0]} 
          title={data.title[0]} 
          description={data.description[0]} 
          delay={0}
          button={data.button[0]}/>
          <Home_display_card 
          imageSrc={data.images[1]} 
          title={data.title[1]} 
          description={data.description[0]} 
          delay={0.2}
          button={data.button[1]}/>
          <Home_display_card 
          imageSrc={data.images[2]} 
          title={data.title[2]} 
          description={data.description[0]} 
          delay={0.4}
          button={data.button[2]}/>
        </div>
      </div>
  )
}

export default DisplayContainer