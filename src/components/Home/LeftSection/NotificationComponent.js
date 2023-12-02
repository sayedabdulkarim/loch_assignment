import React from "react";
import { HomeBellIcon } from "../../../utils/svgs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
  Pagination,
  Navigation,
  HashNavigation,
  Autoplay,
} from "swiper/modules";

const NotificationComponent = () => {
  return (
    <div className="notification_component">
      {/*  */}
      <div className="left_section">
        <HomeBellIcon />
        <h3 className="first_label">
          Get notified when a highly correlated whale makes a move
        </h3>
        <h4 className="second_label">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </h4>
      </div>
      {/*  */}
      <div className="right_section">
        <Swiper
          hashNavigation={{
            watchState: false,
          }}
          modules={[Pagination, Navigation, HashNavigation, Autoplay]}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          // autoplay={{
          //   delay: 2500, // Delay between transitions in ms
          //   disableOnInteraction: false, // To continue autoplay after user interaction
          //   pauseOnMouseEnter: true,
          // }}
          className="portfolio_slide_container"
          style={
            {
              // height: "310px",
            }
          }
        >
          <div class="swiper-wrapper">
            <SwiperSlide className="portfolio_slide_item">
              <>
                <HomeBellIcon />
                <p>We’ll be sending notifications to you here</p>
                <span>hello@gmail.com</span>
              </>
            </SwiperSlide>
            <SwiperSlide className="portfolio_slide_item">
              <>
                <HomeBellIcon />
                <p>12345678</p>
                <span>hello@gmail.com</span>
              </>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default NotificationComponent;
