import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">CLOUDY</h1>
        </div>
      </div>
    </div>
  );
}
