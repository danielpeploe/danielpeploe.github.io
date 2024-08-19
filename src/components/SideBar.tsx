import { FaHouse, FaBriefcase, FaCircleQuestion } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface SideBarIconProps {
    icon: any;
    tooltip: string;
}

function SideBar () {
    return (
        <div className="fixed top-0 left-0 h-screen ms:w-12 mm:w-14 ml:w-16 tb:w-20 lp:w-32 flex flex-col bg-light_sidebar dark:bg-dark_sidebar shadow">
            <div className="mt-2">
                <Link to="/">
                    <SideBarIcon icon={<FaHouse />} tooltip="Home"/>
                </Link>
                <Link to="/projects">
                    <SideBarIcon icon={<FaBriefcase />} tooltip="Projects"/>
                </Link>
                <Link to="/about">
                    <SideBarIcon icon={<FaCircleQuestion />} tooltip="Who?"/>
                </Link>
            </div>
        </div>
    )

}

function SideBarIcon ({ icon, tooltip }: SideBarIconProps) {
    return (
        <div className="sidebar-icon group">
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                {tooltip}
            </span>
        </div>
    )
}

export default SideBar;