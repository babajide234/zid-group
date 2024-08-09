import NavItem from "./NavItem";


const navItems = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About ' },
    { path: '/solutions', name: 'Our Solutions ' },
    { path: '/contact', name: 'Contact Us' }
];

const NavItems = () => {
    return (
        <div className="flex items-center gap-5">
            {navItems.map((item, index) => (
                <NavItem key={index} path={item.path} name={item.name} />
            ))}
        </div>
    );
}



export default NavItems;