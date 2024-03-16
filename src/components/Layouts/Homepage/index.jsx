import HomeTitle from "../../Fragments/HomeTitle/homeTitle";
import SocialIcon from "../../Fragments/SocialIcon";
import { InstagramIcon, GithubIcon, GmailIcon } from "../../Elements/Icon/Icon";

const Homepage = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <HomeTitle />
      <nav className="flex justify-center mt-11 gap-6">
        <SocialIcon>
          <InstagramIcon />
        </SocialIcon>
        <SocialIcon>
          <GithubIcon />
        </SocialIcon>
        <SocialIcon>
          <GmailIcon />
        </SocialIcon>
      </nav>
    </div>
  );
};

export default Homepage;
