import css from "../styles/Footer.module.css";
import { UilFacebook, UilGithub, UilInstagram } from "@iconscout/react-unicons";
import Image from "next/image";
import Logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <div className={css.container}>
      <span>ALL RIGHTS RESERVED</span>
      <div className={css.socials}>
        <UilFacebook size={35} />
        <UilGithub size={35} />
        <UilInstagram size={35} />
      </div>
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>Fudu</span>
      </div>
    </div>
  );
}
