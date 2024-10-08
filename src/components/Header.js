import {useState} from "react"
import { Link } from "react-router-dom";
const Header = () => {

   const [loginBtn,setLoginBtn]=useState("login")
  return (
    <>
      <div className="header flex border border-solid bg-pink-100 shadow-lg  w-full ">
        <img
          className="logo w-32 h-32"
          src="https://i.etsystatic.com/36183479/r/il/197ea6/5750585377/il_1588xN.5750585377_a4rf.jpg"
        />

        <div className="nav-items flex w-full ">
          <ul className="list flex space-x-5 justify-end  w-full p-10 font-medium">
            <Link to={'/about'} >
            <li>About</li>
            </Link>
            <Link to={'/'} >
            <li>Home</li>
            </Link>
            <Link to={'/contact'} >
            <li>Contact</li>
            </Link>
            {/* <li>login</li> */}
            <li onClick={()=>{
              loginBtn==="login" ? setLoginBtn("logout") : setLoginBtn("login")
            }
            } className="cursor-pointer" >{loginBtn}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
