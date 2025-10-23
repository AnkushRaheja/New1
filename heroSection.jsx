const HeroSection = () => {
    return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-36 my-10 px-5">
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
            <div className="pb-5 sm:pb-10">
            <img src="MainLogo.png" className="h-32 sm:h-44 md:h-56 w-auto object-contain min-w-28" alt="Main Logo" />
            </div>
            <div className="sm:ml-5">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
                The <br />
                <span className="text-[#72A32F]">Dabbawalla</span>
                <span className="text-[#F9E165]">s.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl">
                <span className="text-[#72A32F]">fresh</span>, homemade meals every day
            </p>
            </div>
        </div>
        <div className="flex justify-center lg:justify-start mt-5 lg:mt-auto">
            <button className="bg-[#72A32F] text-xl sm:text-2xl md:text-3xl text-white rounded-md flex items-center gap-2 py-3 px-5">
            Start Today
            <img className="h-5 sm:h-6 w-5 sm:w-6" src="Icon1.png" alt="Arrow Icon" />
            </button>
        </div>
    </div>

    );
  };
  
  export default HeroSection;
  