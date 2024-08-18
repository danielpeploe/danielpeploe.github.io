function NotFound () {
    return (
        <div className="flex items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <main aria-role="main" className="min-w-[230px]">
                <div>
                    <div className="inline text-logo_green text-8xl font-semibold">404</div>
                </div>
                <span className="text-2xl font-semibold">{"Not Found :("}</span>
            </main>
        </div>
    )
  }
  
export default NotFound;