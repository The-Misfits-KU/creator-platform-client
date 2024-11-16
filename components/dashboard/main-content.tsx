import { lazy, Suspense, useState, useEffect } from "react";

export default function MainContent({
    collapsed,
    active,
}: {
    collapsed: boolean;
    active: string;
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
                const NotFound = () => { return <div className="text-black p-4 flex items-center justify-center">404 Not Found.</div>; };

                setComponent(() => NotFound);
            }
        };

        loadComponent();
    }, [active]);

    return (
        <div className={`${collapsed ? "col-span-9" : "col-span-8"} border-x`}>
            <div className="sticky top-0 backdrop-blur-md bg-white/80 border-b p-4 text-black">
                <h1 className="text-xl font-bold">{active}</h1>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
                {Component ? <Component /> : <div>Loading...</div>}
            </Suspense>
        </div>
    );
}
