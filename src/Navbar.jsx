import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg shadow-md justify-center flex items-center font-bold bg-white">
        <p className="blue-gradient_text">AH</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) =>  isActive ? 'text-blue-900' : 'text-black-500' }>
          About
        </NavLink>
        <NavLink to="/blogs" className={({ isActive }) =>  isActive ? 'text-blue-500' : 'text-black-500' }>
          Blogs
        </NavLink>
        <NavLink to="/Contact" className={({ isActive }) =>  isActive ? 'text-blue-500' : 'text-black-500' }>
          Contact
        </NavLink>
      </nav>
    </header >
  )
}

export default Navbar