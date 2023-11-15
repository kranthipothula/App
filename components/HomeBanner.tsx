const HomeBanner = () => {
    return (
        <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8">
             <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
            <div className="mb-8 md:mb-0 text-center">Winter sale!</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Enjoy discount on selected items</h1>
            <p>GET 50%</p>
            <div> </div>
            </div>
        </div>
    )
}

export default HomeBanner;