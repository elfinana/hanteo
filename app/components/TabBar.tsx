import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode } from "swiper/modules";

const tabs = [
  { id: "chart", title: "차트" },
  { id: "whook", title: "Whook" },
  { id: "event", title: "이벤트" },
  { id: "news", title: "뉴스" },
  { id: "store", title: "스토어" },
  { id: "charge", title: "충전소" },
];

interface TabBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabBar = ({ activeTab, setActiveTab }: TabBarProps) => {
  return (
    <div className="w-full max-w-[425px] flex flex-col items-center">
      <img
        src="/hanteo1.png"
        alt="hanteo global"
        className="w-28 h-auto mb-2" // ✅ 크기 조정 및 아래 여백 추가
      />
      <div className="w-full">
        <Swiper
          modules={[FreeMode]}
          slidesPerView={6}
          freeMode={true}
          className="w-full"
        >
          {tabs.map((tab) => (
            <SwiperSlide key={tab.id} className="flex-1">
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`w-full  py-2 font-semibold whitespace-nowrap ${
                  activeTab === tab.id ? "text-[#DD3A6C]" : "text-gray-600"
                }`}
              >
                {tab.title}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TabBar;
