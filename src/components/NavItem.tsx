import { NavLink } from "react-router-dom";
import { cn } from "../utils/cn";

interface NavItemProps{
    path: string,
    name:string
}

const NavItem = ({ path, name }: NavItemProps) => {
    return (
        <NavLink 
        to={path} 
        className={({ isActive }) => cn(" text-md font-light text-gray-500 relative group", {
            " text-gray-950 font-semibold  ": isActive,
        })}>
            {({ isActive }) => (
            <>
                {name}
                <span 
                    className={cn(
                        "bg-gray-300 h-[2px] w-1 transform transition-all group-hover:w-4/5 delay-200 ease-linear absolute -bottom-2 rounded-sm block",{
                            "bg-gray-700 w-full":isActive
                        }
                    )}
                ></span>
            </>
            )}
        </NavLink>
    );
}

export default NavItem;