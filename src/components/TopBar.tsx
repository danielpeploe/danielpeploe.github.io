import { FaCircleHalfStroke } from "react-icons/fa6";
import useThemeToggle from "../hooks/useThemeToggle";

function TopBar () {
  return (
    <div className="top-bar">
      <span className="items-center flex justify-center w-full ms:mx-4 mm:mx-4 ml:mx-4 tb:mx-20 lp:mx-28">
        <div className="top-bar-text">{"C:\\Users\\Daniel>"}</div>
        <div className="text-xl ml:text-2xl  text-gray-500 dark:text-gray-300 tracking-wider font-semibold text-opacity-80 font-mono">
          <DarkModeIcon icon={<FaCircleHalfStroke size="24" />}></DarkModeIcon>
        </div>
      </span>
        
    </div>
  )
}

function DarkModeIcon ({ icon }: any) {
  const { toggleTheme } = useThemeToggle();

  return (
      <button className="" onClick={toggleTheme}>
          {icon}
      </button>
  )
}

export default TopBar;