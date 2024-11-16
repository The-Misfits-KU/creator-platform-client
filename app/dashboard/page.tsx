// app/page.tsx
'use client';

import React, { useState } from 'react';

import Sidebar from '@/components/dashboard/sidebar';
import RightSidebar from '@/components/dashboard/right-sidebar';
import MainContent from '@/components/dashboard/main-content';

export default function DashboardPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState('Postdetails');

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-100 to-white'>
      <div className='grid h-screen grid-cols-12'>
        {/* Collapsible Sidebar */}
        <Sidebar
          active={activePage}
          collapsed={collapsed}
          setActive={setActivePage}
          setCollapsed={setCollapsed}
        />

        {/* Main Content */}
        <MainContent active={activePage} collapsed={collapsed} />
        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
}
