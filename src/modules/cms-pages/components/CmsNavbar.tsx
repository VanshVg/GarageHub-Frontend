import { navbarData } from "../types/constants";

const CmsNavbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-slate-800">
      <div>
        <img src={navbarData.logoUrl} className="h-20 w-20 cursor-pointer" alt="Logo" />
      </div>
      <div className="flex gap-8 text-white text-lg items-center">
        {navbarData?.navigationMenu?.map((item: string, index: number) => (
          <div className="cursor-pointer hover:underline" key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        {navbarData?.buttons?.map((item: string, index: number) => (
          <button
            key={index}
            className="bg-primaryButton text-black hover:bg-primaryButtonHover py-2 px-4 rounded-md transition-colors duration-300"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CmsNavbar;
