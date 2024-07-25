import React, { useState } from "react";



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
         My Links
        </button>
        <button
          className={`tab-link px-4 py-2  ${
            activeTab == "Tab2"
              ? "text-black font-bold border-b-2 border-black "
              : "text-black"
          }`}
          onClick={() => openTab("Tab2")}
        >
         Profile
        </button>
       
      </div>
      <div
        id="Tab1"
        className={`tab-content p-4  ${
          activeTab == "Tab1" ? "block" : "hidden"
        }`}
      >
        <h2 className="text-xl font-bold">Links</h2>
        <p>This is the content for Tab 1.</p>
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
