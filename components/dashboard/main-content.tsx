import { Suspense, useState, useEffect } from 'react';

export default function MainContent({
  collapsed,
  active,
  setActive,
}: {
  collapsed: boolean;
  active: string;
  setActive: (active: string) => void;
}) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const DynamicComponent = await import(
          `@/components/dashboard/contents/${active.toLowerCase()}`
        );

        setComponent(() => DynamicComponent.default);
      } catch {
        const NotFound = () => {
          return (
            <div className='flex items-center justify-center p-4 text-black'>
              404 Not Found.
            </div>
          );
        };

        setComponent(() => NotFound);
      }
    };

    loadComponent();
  }, [active]);

  return (
    <div className={`${collapsed ? 'col-span-9' : 'col-span-8'} border-x`}>
      <div className='sticky top-0 border-b bg-white/80 p-4 text-black backdrop-blur-md'>
        <h1 className='text-xl font-bold'>{active}</h1>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {Component ? <Component /> : <div>Loading...</div>}
      </Suspense>
    </div>
  );
}
