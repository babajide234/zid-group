import { Link } from "react-router-dom"
import Logo from '../assets/logo.png';
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavItems from "./NavItems";

export const Navbar = () => {
  return (
    <div className="w-full z-20 absolute inset-0 ">
        <header className=" w-full bg-white">
            <MaxWidthWrapper>
              <div className=" px-20 py-10  flex items-center justify-between">
                  <Link to={''} className="w-10 ">
                      <img src={Logo} alt="" className="object-cover w-10 h-10 " />
                  </Link>

                  <nav className="hidden lg:ml-8 z-50 lg:block lg:self-stretch">
                      <NavItems/>
                  </nav>
              </div>
            </MaxWidthWrapper>
        </header>
    </div>
  )
}
