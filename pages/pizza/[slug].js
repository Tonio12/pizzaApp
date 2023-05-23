import Image from "next/image";
import Layout from "../../Components/Layout";
import { client, urlFor } from "../../lib/client";
import css from "../../styles/Pizza.module.css";
import LeftArrow from "../../assets/arrowLeft.png";
import RightArrow from "../../assets/arrowRight.png";
import { useState } from "react";

export default function Pizza({ pizza }) {
  const src = urlFor(pizza.image).url();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(1);
  return (
    <Layout>
      {
        <div className={css.container}>
          <div className={css.imageWrapper}>
            <Image
              loader={() => src}
              src={src}
              layout="fill"
              unoptimized
              objectFit="cover"
            />
          </div>

          {/*Right Side*/}
          <div className={css.right}>
            <span>{pizza.name}</span>
            <span>{pizza.details}</span>

            <span>
              <span style={{ color: "var(--themeRed)" }}>$</span>
              {pizza.price[size]}
            </span>
            <div className={css.sizes}>
              <span>Sizes</span>
              <div className={css.sizeVariants}>
                <div
                  className={size === 0 ? css.selected : ""}
                  onClick={() => setSize(0)}
                >
                  Small
                </div>
                <div
                  className={size === 1 ? css.selected : ""}
                  onClick={() => setSize(1)}
                >
                  Regular
                </div>
                <div
                  className={size === 2 ? css.selected : ""}
                  onClick={() => setSize(2)}
                >
                  Large
                </div>
              </div>
            </div>

            {/*Quantity*/}
            <div className={css.quantity}>
              <span>Quantity</span>

              <div className={css.counter}>
                <Image
                  src={LeftArrow}
                  height={20}
                  width={20}
                  objectFit="contain"
                  onClick={() => {
                    quantity > 1 && setQuantity((quantity) => quantity - 1);
                  }}
                />

                <span>{quantity}</span>

                <Image
                  src={RightArrow}
                  height={20}
                  width={20}
                  objectFit="contain"
                  onClick={() => {
                    setQuantity((quantity) => quantity + 1);
                  }}
                />
              </div>
            </div>

            {/*Buttom */}
            <div className={`btn ${css.btn}`}>Add to Cart</div>
          </div>
        </div>
      }
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="pizza" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const pizza = await client.fetch(
    `*[_type=="pizza" && slug.current == '${slug}'][0]`
  );

  return {
    props: {
      pizza,
    },
  };
}
