import css from "../styles/Hero.module.css";
import Image from "next/image";
import Cherry from "../assets/Cherry.png";
import heroImage from "../assets/heroImage.png";
import { UilPhone } from "@iconscout/react-unicons";
import Pizza1 from "../assets/p1.jpg";

export default function Hero() {
  return (
    <div className={css.container}>
      <div className={css.left}>
        <div className={css.cherryDiv}>
          <span>More Than Faster</span>
          <Image src={Cherry} width={40} height={25} />
        </div>

        {/*Hero Text*/}
        <div className={css.heroText}>
          <span>Be The Fastest</span>
          <span>In Delivering</span>
          <span>
            Your{" "}
            <span style={{ color: "var(--themeRed)", fontStyle: "italic" }}>
              Pizza
            </span>
          </span>
        </div>

        {/*Mini  Text*/}
        <div className={css.miniText}>
          <span>
            Our Mission is to fill yours tummies with delicious food and with
            fast and free delivery
          </span>
        </div>

        <button className={`btn ${css.btn}`}>Get Started</button>
      </div>

      <div className={css.right}>
        <div className={css.imageContainer}>
          <Image src={heroImage} layout="intrinsic" />
        </div>

        <div className={css.contactUs}>
          <span>Contact Us</span>
          <div>
            <UilPhone color="white" />
          </div>
        </div>

        <div className={css.Pizza}>
          <div>
            <Image src={Pizza1} objectFit="cover" layout="intrinsic" />
          </div>

          <div className={css.details}>
            <span>Italian Pizza</span>
            <span>
              <span style={{ color: `var(--themeRed)` }}>$</span>7.49
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
