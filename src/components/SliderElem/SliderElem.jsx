import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function SliderElem(){
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };
      return (
        <div className="slider-container">
            <h1>Представленный ассортимент</h1>
      <Slider {...settings}>
        <div>
            <img src="https://ir-3.ozone.ru/s3/multimedia-1-7/wc1000/7029624787.jpg" alt="" /> 
        </div>
        <div>
            <img src="https://ir-3.ozone.ru/s3/multimedia-1-g/wc1000/7029633184.jpg" alt="" /> 
        </div>
        <div>
            <img src="https://ir-3.ozone.ru/s3/multimedia-1-8/wc1000/7077535460.jpg" alt="" /> 
        </div>
        <div>
            <img src="https://avatars.mds.yandex.net/i?id=2f0ba8d399bd44f47c46e954e8022ca5_l-4935684-images-thumbs&n=13" alt="" />
        </div>
        <div>
          <img src="https://i.pinimg.com/736x/48/79/f1/4879f18a9cf79223e1898be13f798219.jpg" alt="" />
        </div>
        
      </Slider>
    </div>
  );
}
