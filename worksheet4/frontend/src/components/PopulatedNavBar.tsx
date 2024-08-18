import { IoMdArrowDropdown } from "react-icons/io";
import NavBar from "./nav/NavBar";
import NavDropdown from "./nav/NavDropdown";
import NavItem from "./nav/NavItem";

const PopulatedNavBar = () => {
    return (
        <NavBar>
            <NavItem>SPEED</NavItem>
            <NavItem route="/" end>
                Home
            </NavItem>
                <NavItem dropdown route="/articles">
                    Articles <IoMdArrowDropdown />
                <NavDropdown>
                    <NavItem route="/articles">View Articles</NavItem>
                    <NavItem route="/articles/add">Add Article</NavItem>
                </NavDropdown>
            </NavItem>
        </NavBar>
    );
};

export default PopulatedNavBar;