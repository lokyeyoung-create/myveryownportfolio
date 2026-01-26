import React from "react";
import Icon from "../assets/images/Icon.png";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#FFFFFF] border-t-[0.5px] border-black py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-3">
        <img
          src={Icon}
          alt="Lok Ye Logo"
          className="w-12 h-12 object-contain"
        />
        <p className="text-[#626262] font-figtree font-light text-sm">
          Made with ♥ by Lok Ye Young
        </p>
      </div>
    </footer>
  );
};

export default Footer;
