import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { roomInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import Dialog from "../../components/dialog/Dialog";


const NewRoom = () => {
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const location = useLocation();
  const { id, updateClicked } = location.state || {};
  const navigate = useNavigate();

  const { data, loading, error } = useFetch("/hotels");


  useEffect(() => {
    if (id){
      const fetchData = async () => {
        try {
          const res = await axios .get(`/rooms/${id}`);
          setRooms(res.data.roomNumbers.map(room => room.number).join(","));  //add
          setInfo(res.data);
          
        } catch (err){
          console.log(err);
        }
      };
      fetchData();
    }
    
  }, [id]);
 
 
 
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClose = () => {
    setShowDialog(false);
    navigate("/rooms")
  };
  
  
  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map((room) => ({ number: room.trim() }));
    try {
      if (updateClicked && id) {
        await axios.put(`/rooms/${id}`, { ...info, roomNumbers, hotelId });
      } else {
        await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers });
      }
      setShowDialog(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{updateClicked ? "Cập nhật" : "Thêm phòng mới"}</h1>
        </div>
        <div className="bottom">
          
          <div className="right">
            <form>
              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleChange} value={info[input.id] || ''} />  
                </div>
              ))}

              <div className="formInput">
                  <label>Phòng</label>
                  <textarea 
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="thêm dấu phẩy sau số phòng (nếu thêm trên 2 phòng)."
                  value={rooms}
                />
                </div>
                
                {updateClicked ? null : (
                <div className="formInput">  
                  <label>Chọn Khách sạn</label>
                  <select id="hotelId" name="hotel"  value={hotelId} onChange={(e) => setHotelId(e.target.value)}>
                  {loading
                    ? "loading"
                    : data &&
                      data.map((hotel) => (
                        <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                      ))}
                  </select>
                </div>)}
              <button onClick={handleClick} >{updateClicked ? "Cập nhật" : "Tạo"}</button>
            </form>
          </div>
        </div>
        {showDialog && <Dialog handleClose={handleClose} isSuccess={true} position="center"/>}
      </div>
    </div>
  );
};

export default NewRoom;


