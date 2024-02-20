import NavItem from "../interface/Interfaces";

function Navbar() {
    const navItems: NavItem[] = [
      {
        path: "/",
        name: "Home",
      },
      {
        path: "/about",
        name: "About",
      },
      {
        path: "/programs",
        name: "Programs",
      },
      {
        path: "/contact",
        name: "Contact",
      },
    ];

  return <div className="">
    <div>
        Logo
    </div>

    {navItems.map((nav: NavItem, index: number) => {
        <div key={index}>
            hello
        </div>
    })}
  </div>;
}

export default Navbar;
