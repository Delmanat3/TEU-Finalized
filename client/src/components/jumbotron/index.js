import image from "../img/techyShit.jpg";
import smoov from "../img/back.jpg"
import grass from '../img/grass.jpg'
//const x='../img/super.jpg'
import { styled, alpha } from "@mui/material/styles";
import { Cards } from "../Card";

const Bgimg1 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${image})`,
  minHeight: "300px",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  opacity: "0.65",
}));
{
  /* <Bgimg1/> */
}
export const Jumbo = (props) => {
  // const x='../components/super'

  return (
    <>
     <div id="Bg1" style={{ backgroundImage: `url(${image})` }}></div>
      <Bgimg1 />
      <div id="Bg2" style={{ backgroundImage: `url(${grass})` }} >
          <Cards {...props}/>
          </div>

      
      
    </>
  );
};