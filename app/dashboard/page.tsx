// app/page.tsx
"use client";

import React, { useState } from "react";

import Sidebar from "@/components/dashboard/sidebar";
import RightSidebar from "@/components/dashboard/right-sidebar";
import MainContent from "@/components/dashboard/main-content";

export default function DashboardPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white">
      <div className="grid grid-cols-12 h-screen">
        {/* Collapsible Sidebar */}
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          active={activePage}
          setActive={setActivePage}
        />

        {/* Main Content */}
        <MainContent collapsed={collapsed} active={activePage}/>
        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
}
