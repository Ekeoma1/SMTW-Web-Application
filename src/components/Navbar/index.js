import { useState } from "react";
import MobileNav from "./MobileNav";
import CategorySidebar from "./CategorySidebar";
import Nav from "./Nav";

function Navbar() {
  const [sidebar, setSidebar] = useState(true);
  const [mobileNav, setMobileNav] = useState(true);
  const toggle = () => setSidebar(!sidebar)
  const mNavToggle = () => setMobileNav(!mobileNav)
  return (
    <>
      <Nav mToggle={mNavToggle} toggle={toggle} />
      <CategorySidebar toggle={toggle} sidebar={sidebar} />
      <MobileNav sideToggle={toggle} toggle={mNavToggle} sidebar={sidebar} mobileNav={mobileNav} />
    </>
  );
}

export default Navbar;
