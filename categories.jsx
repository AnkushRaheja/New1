const Categories = () => {
    return (
      <div>
        <section>
            <div className="h-96 grid grid-cols-12 grid-rows-4 md:grid-rows-3 lg:grid-rows-2 gap-4 px-12 py-12">
              <div className="bg-[#F9E165] overflow-auto scrollbar-hide grow text-left rounded-xl p-7 col-span-12 row-span-2 lg:col-span-6 lg:row-span-2 md:col-span-6 md:row-span-2">
                <h2 className="text-4xl">The 'Mess'</h2> 
                <p className="text-2xl mt-14">Stop worrying <br /> about what to eat <br /> for lunch and <br /> dinner everyday. </p>
              </div>
              <div className="flex justify-center items-center bg-[#F9E165] overflow-hidden grow text-3xl text-center rounded-xl p-5 col-span-6 row-span-1 lg:col-span-3 md:col-span-3 lg:row-span-1 md:row-span-2">Mom’s kitchen</div>
              <div className="flex justify-center items-center bg-[#F9E165] overflow-hidden grow text-3xl text-center rounded-xl p-5 col-span-6 row-span-1 lg:col-span-3 md:col-span-3 lg:row-span-1 md:row-span-2">Nutrilitious</div>
              <div className="flex justify-center items-center bg-[#72A32F] overflow-hidden grow text-3xl text-center rounded-xl p-5 col-span-6 row-span-1 lg:col-span-3 md:col-span-6">Jain exclusive</div>
              <div className="flex justify-center items-center bg-[#F9E165] overflow-hidden grow text-3xl text-center rounded-xl p-5 col-span-6 row-span-1 lg:col-span-3 md:col-span-6">non veg</div>
            </div>
        </section>
        <div className="grid gap-4 place-items-center grid-cols-1 grid-rows-4 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 p-10">
                <div className="relative flex justify-center items-center text-wrap rounded-full w-52 h-52 bg-[#F9E165]">
                  <div className="relative text-2xl flex items-center justify-center border-spacing-2 rounded-full w-[12.5rem] h-[12.5rem] bg-[#FDF6CF]">
                    Budget Meals
                  </div>
                </div>
                <div className="relative flex justify-center items-center text-wrap rounded-full w-52 h-52 bg-[#F9E165]">
                  <div className="relative text-2xl flex items-center justify-center border-spacing-2 rounded-full w-[12.5rem] h-[12.5rem] bg-[#FDF6CF]">
                  Weekly Meals
                  </div>
                </div>
                <div className="relative flex justify-center items-center text-wrap rounded-full w-52 h-52 bg-[#F9E165]">
                  <div className="relative text-2xl flex items-center justify-center border-spacing-2 rounded-full w-[12.5rem] h-[12.5rem] bg-[#FDF6CF]">
                  Meals by Region
                  </div>
                </div>
                <div className="relative flex justify-center items-center text-wrap rounded-full w-52 h-52 bg-[#F9E165]">
                  <div className="relative text-2xl flex items-center justify-center border-spacing-2 rounded-full w-[12.5rem] h-[12.5rem] bg-[#FDF6CF]">
                  Nutritional
                  </div>
                </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="items-center h-1 w-11/12 border-t-[1px] border-gray-900 align-middle"></div>
        </div>
      </div>
    );
  };
  
  export default Categories;
