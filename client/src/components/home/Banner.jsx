/** @jsxImportSource @emotion/react */

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../constants/data";
import { css } from "@emotion/react";

const responsive = {
    // superLargeDesktop: {
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 1
    // },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const image = css`
    width: 100%;
    height: 240px;
    @media (max-width: 900px) {
      object-fit: cover;
      height: 180px;
    }
  `;


const Banner = () => {
    return (
        <Carousel 
            swipeable = {false}
            draggable = {false}
            showDots = {false}
            infinite = {true}
            autoPlay = {true}
            autoPlaySpeed = {4000}
            keyBoardControl = {true}
            slidesToSlide = {1}
            responsive={responsive}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {
                bannerData.map((data, i) => {
                    return <img key={i} src={data.url} alt="carousel-img" css={image} />
                })
            }
        </Carousel>
    )
}

export default Banner;