import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Home () {
    return (
        <div className="flex items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <main aria-role="main" className="min-w-[230px]">
                <div>
                    <div className="inline text-2xl font-semibold">Hi, I'm </div>
                    <div className="inline text-logo_green text-4xl font-semibold">Daniel</div>
                </div>
                <span className="tb:text-xl font-semibold">Software Engineering Student @ University of Canterbury</span>
                <span className="flex gap-5 justify-center pt-[6px]">
                    <a href="https://github.com/danielpeploe" target="_blank" rel="noopener noreferrer">
                        <FaGithub size="28" />
                    </a>
                    <a href="https://www.linkedin.com/in/danielpeploe/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size="28" />
                    </a>
                </span>
            </main>
        </div>
    )
  }
  
export default Home;