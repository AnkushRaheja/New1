const Footer = () => {
    return (
      <footer className="px-10 py-6 h-1/3 bg-gradient-to-b from-[#faedab] to-[#e8f4d7]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="gap-4 flex flex-col justify-evenly text-center rounded-2xl bg-gradient-to-b from-[#fcf3c8] to-[#dff9bc] opacity-85">
            <h3 className="font-semibold text-xl">Contact Us</h3>
            <p className="text-lg">Partner with us</p>
            <img className="h-7" src="Gmail.svg"/>
          </div>
          <div className="gap-4 flex flex-col justify-evenly text-center rounded-2xl bg-gradient-to-b from-[#fcf3c8] to-[#dff9bc] opacity-85">
            <h3 className="font-semibold text-xl">About Us</h3>
            <p className="text-lg">Team</p>
          </div>
          <div className="gap-4 flex flex-col justify-evenly text-center rounded-2xl bg-gradient-to-b from-[#fcf3c8] to-[#dff9bc] opacity-85">
            <h3 className="font-semibold text-xl">Legal</h3>
            <p className="text-lg">Terms & Conditions</p>
            <p className="text-lg">Privacy Policy</p>
          </div>
          <div className="gap-4 flex flex-col justify-evenly text-center rounded-2xl bg-gradient-to-b from-[#fcf3c8] to-[#dff9bc] opacity-85">
          <h3 className="font-semibold text-xl">Social Links</h3>
          <div className="flex space-x-6 justify-center">
            <img src="/Linkedin.svg" alt="LinkedIn" className="w-7 h-7" />
            <img src="/Twitter.svg" alt="Twitter" className="w-7 h-7" />
            <img src="/Telegram.svg" alt="Telegram" className="w-7 h-7" />
            <img src="/Instagram.svg" alt="Instagram" className="w-7 h-7" />
          </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  