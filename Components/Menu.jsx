import { urlFor } from "../lib/client";
import css from "../styles/Menu.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Menu({ pizzas }) {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>Our MENU</span>
        <span>Menu That Always</span>
        <span>Make Your Fall In Love</span>
      </div>

      {/*Pizzas*/}
      <div className={css.menu}>
        {pizzas.pizzas.map((pizza, id) => {
          const src = urlFor(pizza.image).url();
          return (
            <div className={css.pizza} key={id}>
              <Link href={`/pizza/${pizza.slug.current}`}>
                <div className={css.ImageWrapper}>
                  <Image
                    loader={() => src}
                    src={src}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Link>

              <span style={{ fontSize: "1.5rem" }}>{pizza.name}</span>
              <span style={{ fontSize: "1.5rem" }}>
                <span style={{ color: "var(--themeRed)" }}>$</span>{" "}
                {pizza.price[1]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
