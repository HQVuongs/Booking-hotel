import "./sidebar.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext  } from "../../context/AuthContext";



const Sidebar = () => {
  

  const { dispatch: authDispatch } = useContext(AuthContext);
  const { dispatch: darkModeDispatch } = useContext(DarkModeContext);
 
  const navigate = useNavigate();
  const handleClick = async (event) => {
    try {
      // Kiểm tra class name của nút được nhấn
     if (event.target.classList.contains("btnLogOut")){
        authDispatch({ type: "LOGOUT" });
        
        navigate("/")
      }
    } catch (err) {}
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">BookingHotelAdmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Khách hàng</span>
            </li>
          </Link>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Khách sạn</span>
            </li>
          </Link>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li>
            <CreditCardIcon className="icon" />
            <span>Phòng</span>
          </li>
          </Link>
          <p className="title">USER</p>
         
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={handleClick} className="btnLogOut">Thoát</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => darkModeDispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => darkModeDispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
