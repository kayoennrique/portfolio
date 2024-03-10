import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ISocialIconsProps, SocialIcon } from "../SocialIcon";

const socialListItems: ISocialIconsProps[] = [
  {
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/kayoennrique/'
  },
  {
    icon: <FaGithub />,
    link: 'https://github.com/kayoennrique'
  },
  {
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/kayoennrique/',
  },
]


const Footer = () => {

  return (
    <footer className="text-center py-12 ">
      <div className="container relative mx-auto shadow-lg z-40 shadow-black/[0.2] bg-yellow-300/10 text-purple-500 rounded-3xl d:mx-auto p-6 dark:text-yellow-500 ">
        {socialListItems.map((social, index) => (
          <SocialIcon key={index} icon={social.icon} link={social.link} />
        ))}
        <div className="container mx-auto flex items-center justify-center">
          <div className="text-center mt-4">
            Desenvolvido por Kayo Ennrique. Todos os direitos reservados &copy;
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;