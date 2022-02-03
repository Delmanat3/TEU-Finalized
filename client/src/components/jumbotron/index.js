
// import smoov from "/img/back.jpg"
//const x='../img/super.jpg'
import { styled } from "@mui/material/styles";
import { Cards } from "../Card";
import { Search } from "../Search";
// import ProductItem from "../ProductItem";
const image = "/img/coffee.jpg";

const grass = '/img/grass.jpg'

const Bgimg1 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${image})`,
  minHeight: "300px",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  opacity: "0.65",
}));

export const Jumbo = (props) => {
  // const x='../components/super'

  return (
    <>
     <div id="Bg1" style={{ backgroundImage: `url(${image})` }}>
        <Search sx={{}}/> </div>
      <Bgimg1 />
      <div id="Bg2" style={{ backgroundImage: `url(${grass})` }} >
          <Cards {...props}/>
          </div>
      
    </>
  );
};
