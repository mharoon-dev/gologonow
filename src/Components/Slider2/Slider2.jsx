import "./Slider2.css";
import bg from "../../../public/assets/aboutWeDo/bg.png";

import img1 from "../../../public/assets/Slider2/1.png";
import img2 from "../../../public/assets/Slider2/2.jpg";
import img3 from "../../../public/assets/Slider2/3.png";
import img4 from "../../../public/assets/Slider2/4.jpg";
import img5 from "../../../public/assets/Slider2/5.jpeg";
import img6 from "../../../public/assets/Slider2/6.png";

const Slider2 = () => {
  const data = [img1, img2, img3, img4, img5, img6];

  return (
    <>
      <div
        className="container-fluid slider2Container"
        style={{
          padding: "50px 0",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div
            className="row flex-nowrap  d-flex justify-content-center align-items-center"
            style={{
              overflow: "scroll !important",
            }}
          >
            {data.map((item, index) => {
              return (
                <img
                  src={item}
                  className="slider2Img"
                  style={{
                    width: "250px",
                  }}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider2;
