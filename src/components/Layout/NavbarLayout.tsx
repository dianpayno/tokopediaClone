import TopSection from "../elements/Navbar/TopSection";
import MiddleSection from "../elements/Navbar/MiddleSection";
import BottomSection from "../elements/Navbar/BottomSection";


const NavbarLayout = () => {

  return (
    
      <div className="w-full fixed bg-white border border-b-gray-200 flex flex-col">
        <TopSection />
        <MiddleSection />
        <BottomSection />
      </div>
    
  );
};

export default NavbarLayout;
