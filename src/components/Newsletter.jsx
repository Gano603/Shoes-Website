import {AiOutlineMail} from 'react-icons/ai'
import '../styles/Newsletter.scss'

const Newsletter = () => {
  return (
    <div className="newsletter">
        <AiOutlineMail />
        <p>Subscribe below to stay up-to-date with everything CODDI.</p>
        <div>
            <input type="text" placeholder='Enter your Email'/>
            <button>Subscribe</button></div>
    </div>
  )
}

export default Newsletter