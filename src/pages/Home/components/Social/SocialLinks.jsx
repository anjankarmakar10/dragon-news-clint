import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const SocialLinks = () => {
  return (
    <div>
      <div className="text-lg text-[#403F3F] font-semibold mb-4">
        Find Us On
      </div>
      <div className="border rounded-md overflow-hidden">
        <LinkWrapper>
          <BsFacebook size={20} />
          Facebook
        </LinkWrapper>
        <LinkWrapper>
          <BsTwitter size={20} />
          Twitter
        </LinkWrapper>
        <LinkWrapper>
          <BsInstagram size={20} />
          Instagram
        </LinkWrapper>
      </div>
    </div>
  );
};

const LinkWrapper = ({ children }) => {
  return (
    <div className="flex items-center gap-2 p-3 font-medium hover:bg-slate-300 cursor-pointer">
      {children}
    </div>
  );
};

export default SocialLinks;
