import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";

function Footer() {
  return (
    <footer className="py-10 bg-black text-[#BCBCBC] text-sm text-center">
      <div className="container">
        <div className="inline-flex justify-center relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:bg-[linear-gradient(to_right,#F87BFF_0%,#FB92CF_50%,#FFDD9B_75%,#C2F0B1_88%,#2FD8FE_100%)] before:blur before:absolute">
          <Image
            src={logo}
            alt="SaaS Logo"
            height={40}
            width={40}
            className="relative"
          />
        </div>
        <nav className="gap-6 flex flex-col items-center md:flex-row md:justify-center mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center items-center gap-4 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedin />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
