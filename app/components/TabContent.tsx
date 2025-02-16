import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import ListItem from "./ListItem";
import { useEffect, useState } from "react";

const tabData: Record<
  string,
  { id: number; image: string; title: string; description: string }[]
> = {
  chart: Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    image: "/example.png",
    title: `TOP ${i + 1} - 인기곡`,
    description: `2024년 2월 16일 기준`,
  })),
  whook: Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    image: "/example.png",

    title: `Whook 인기 게시글 ${i + 1}`,
    description: "오늘의 게시글",
  })),
  event: Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    image: "/example.png",

    title: `이벤트 ${i + 1} 진행 중`,
    description: "참여하면 혜택",
  })),
  news: Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    image: "/example.png",

    title: `음악 뉴스 ${i + 1}`,
    description: "음악 소식",
  })),
  store: Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    image: "/example.png",

    title: `스토어 추천 상품 ${i + 1}`,
    description: "인기 상품",
  })),
  charge: Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    image: "/example.png",

    title: `충전소 혜택 ${i + 1}`,
    description: "충전하면 추가 보너스!",
  })),
};

const tabKeys = Object.keys(tabData);

interface TabContentProps {
  activeTab: keyof typeof tabData;
  setActiveTab: (tab: keyof typeof tabData) => void;
}

const TabContent = ({ activeTab, setActiveTab }: TabContentProps) => {
  const [items, setItems] = useState(tabData[activeTab].slice(0, 5));
  const [page, setPage] = useState(1);

  useEffect(() => {
    setItems(tabData[activeTab].slice(0, 5));
    setPage(1);
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        loadMoreItems();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const loadMoreItems = () => {
    const newItems = tabData[activeTab].slice(page * 5, (page + 1) * 5);
    if (newItems.length > 0) {
      setItems((prev) => [...prev, ...newItems]);
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="p-4 bg-gray-100 h-full min-h-screen max-w-[425px]">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        loop={false}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => {
          const newIndex = swiper.activeIndex;
          setActiveTab(tabKeys[newIndex]);
        }}
        initialSlide={tabKeys.indexOf(activeTab)}
        className="w-full"
      >
        {tabKeys.map((tab) => (
          <SwiperSlide key={tab} className="w-full flex flex-col items-center">
            {items.map((item, index) => (
              <ListItem key={`${tab}-${item.id}-${index}`} {...item} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TabContent;
