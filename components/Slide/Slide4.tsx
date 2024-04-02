"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay,Mousewheel} from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import styles from "@/styles/slide.module.scss"
import Image from "next/image";

const slideData = [
  {
    id: 1,
    text: 'shape voice',
    imageUrl:'/image/project4/1.png'
  },
  {
    id: 2,
    text: 'shape voice',
    imageUrl:'/image/project4/2.png'
  },
]

export default function Swiperproject4() {
  SwiperCore.use([Navigation, Scrollbar, Autoplay, Mousewheel]);
  return (
    <div className={styles.container}>
       <Swiper
        modules={[Scrollbar]}
        spaceBetween={40} // 슬라이드 사이 간격 조정
        slidesPerView={1} // 한 번에 보여줄 슬라이드 개수
        direction="vertical"
        // height={400}
        mousewheel={true}
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>          
            <div className={styles.cardcontainer} > 
              <div className={styles.card}>
                <Image fill={true} src={slide.imageUrl} alt={slide.text} className={styles.card} />
              </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}