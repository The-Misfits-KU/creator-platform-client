import Home from "@/components/dashboard/contents/home";
import Explore from "@/components/dashboard/contents/explore";

export default function MainContent({
  collapsed,
  active,
}: {
  collapsed: boolean;
  active: string;
}) {
  return (
    <div className={`${collapsed ? "col-span-9" : "col-span-8"} border-x`}>
      <div className="sticky top-0 backdrop-blur-md bg-white/80 border-b p-4 text-black">
        <h1 className="text-xl font-bold">{active}</h1>
      </div>

      {active == "Home" && <Home />}
      {active == "Explore" && <Explore/>}
    </div>
  );
}
