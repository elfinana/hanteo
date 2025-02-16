"use client";

import { useState } from "react";
import Banner from "./components/Banner";
import TabBar from "./components/TabBar";
import TabContent from "./components/TabContent";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("chart");

  return (
    <div className="w-full h-[900px]">
      <div>
        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <Banner />
        <TabContent activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
