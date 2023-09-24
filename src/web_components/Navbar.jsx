import { Link } from 'react-router-dom'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import '../styles/Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-content'>
        <Link to={"/boots"}>BOOTS</Link>
        <Link>HOODIES</Link>
        <Link>HATS</Link>
        <Link to={"/"}><div className="title-style"><div className='small-o'></div>
        <div className='title'>CODDI</div></div></Link>
        <Link>BEANIES</Link>
        <Link>STICKERS</Link>
        <Link>CONTACT</Link>
        </div>
        <Link className='shopping-cart' to={"#"}><HiOutlineShoppingCart /></Link>
    </div>
  )
}

export default Navbar