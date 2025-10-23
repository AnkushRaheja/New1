const HighlyRated = () => {
    return (
      <section className="px-6 py-8 mt-5">
        <h2 className="text-4xl font-medium italic text-center">Highly rated tiffins in your area</h2>
        <div className="grid grid-cols-1 grid-rows-3 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-3 gap-7 mt-4 h-60 p-8">
          <div className="p-2 overflow-y-hidden bg-yellow-300 text-3xl font-extralight flex justify-center items-center rounded-2xl text-nowrap overflow-auto lg:col-span-1">
          North Maharashtra
          </div>
          <div className="p-2 overflow-y-hidden bg-yellow-300 text-3xl font-extralight flex justify-center items-center rounded-2xl text-nowrap overflow-auto lg:col-span-1">
            South
          </div>
          <div className="md:col-span-2 p-2 overflow-y-hidden bg-yellow-300 text-3xl font-extralight flex justify-center items-center rounded-2xl text-nowrap overflow-auto lg:col-span-1">
            East
          </div>
        </div>
      </section>
    );
  };
  
  export default HighlyRated;
  