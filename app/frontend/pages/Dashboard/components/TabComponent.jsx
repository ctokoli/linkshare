import React, { useState } from "react";
import { LuUserSquare } from "react-icons/lu";
import { HiMiniLink } from "react-icons/hi2";
import LinksForm from './LinksForm';



export default function TabComponent() {
    const [activeTab, setActiveTab] = useState("Tab1");
  
    const openTab = (tabName) => {
      setActiveTab(tabName);
    };

  return (
    <div className="container mx-auto ">
      <div className="tabs flex justify-around pt-4 
       border-b-2 ">
        <button
          className={`tab-link px-4 py-2  ${
            activeTab == "Tab1"
              ? "text-black font-bold border-b-2 border-black underline-offset-8"
              : "text-black"
          }`}
          onClick={() => openTab("Tab1")}
        >
        <div className="flex items-center gap-2"> <div><HiMiniLink className="text-2xl" /></div> <div>My Links</div></div>
        </button>
        <button
          className={`tab-link px-4 py-2  ${
            activeTab == "Tab2"
              ? "text-black font-bold border-b-2 border-black "
              : "text-black"
          }`}
          onClick={() => openTab("Tab2")}
        >
         <div className="flex items-center gap-2"> <div><LuUserSquare className="text-2xl" /></div> <div>Profile</div></div>
        </button>
       
      </div>
      <div
        id="Tab1"
        className={`tab-content p-4  ${
          activeTab == "Tab1" ? "block" : "hidden"
        }`}
      >
        <h2 className="text-xl font-bold">Links</h2>
        <div>
          <LinksForm />
        </div>
      </div>
      <div
        id="Tab2"
        className={`tab-content p-4 ${
          activeTab == "Tab2" ? "block" : "hidden"
        }`}
      >
        <h2 className="text-xl font-bold">Profile</h2>
        <p>This is the content for Tab 2.</p>
      </div>
     
    </div>
  );
}
