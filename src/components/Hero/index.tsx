// Components
import { Container } from "@/components/Container"
import { SocialIcon, ISocialIconsProps } from "@/components/SocialIcon"
import Image from "next/image";

// Icons
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

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
    link: 'https://www.instagram.com/kayoennrique/'
  },
]

export const Hero = () => {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <div>
          {socialListItems.map((social, index) => (
            <SocialIcon key={index} icon={social.icon} link={social.link} />
          ))}
          <h1 className="my-6 font-bold text-5xl text-black">
            Olá, me chamo <br />
            <span className="text-purple-500">Kayo Ennrique </span>
            e sou dev!
          </h1>
          <p className="text-black text-3xl mb-7">Há 8 meses desenvolvendo sites e aplicativos <br /> para projetos incríveis! 🚀</p>
        </div>
        <Image className="mix-blend-hard" src="/banner__image.png" alt="Imagem do desenvolvedor" width={285} height={41.5} />
      </div>
    </Container>
  )
}