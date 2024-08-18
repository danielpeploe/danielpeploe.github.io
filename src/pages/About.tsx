function About () {
    return (
        <div className="flex items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="flex flex-col items-center justify-center min-w-[210px]">
            <div className="max-w-[400px]">
                <img className="rounded-full" src="./images/me.png" alt="Project Image" />
            </div>
            <div className="inline text-logo_green text-4xl font-semibold">Daniel Peploe</div>
            <span className="tb:text-xl font-semibold block">I am a final year Software Engineering student at the University of Canterbury.</span>
            <span className="tb:text-xl font-semibold">Outside of software I enjoy football, basketball, tennis, and running.</span>
        </div>
        </div>
    )

  }
  
export default About;