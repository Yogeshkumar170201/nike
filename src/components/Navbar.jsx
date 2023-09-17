import { Link } from "react-router-dom";
import logo from "../assets/images/header-logo.svg";

const Navbar = () => {


  return (
    <div className="flex flex-row justify-around pt-4 items-center">
      <div>
        <Link to="/">
          <img src={logo} width={100} height={100} className="cursor-pointer" />
        </Link>
      </div>
      <div>
        <ul className="flex flex-row justify-between space-x-6 text-slate-500 font-semibold text-lg cursor-pointer">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-row justify-between space-x-6 text-[#062033] font-semibold text-lg cursor-pointer">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar