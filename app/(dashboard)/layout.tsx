import React, { useEffect, useState } from 'react';

import Sidebar from '@/components/dashboard/sidebar';
import RightSidebar from '@/components/dashboard/right-sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-100 to-white'>
      <div className='grid h-screen grid-cols-12 w-full'>
        {/* Collapsible Sidebar */}
        <Sidebar />

        {/* Main Content */}
        {children}
        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
}
