import "../scss/social.scss";

import stars from "../assets/images/icon-star.svg";
import colton from "../assets/images/image-colton.jpg";
import irene from "../assets/images/image-irene.jpg";
import anne from "../assets/images/image-anne.jpg";

function Stars({ name }) {
  return (
    <li>
      <div className="stars">
        <img src={stars} alt="" />
        <img src={stars} alt="" />
        <img src={stars} alt="" />
        <img src={stars} alt="" />
        <img src={stars} alt="" />
      </div>
      <h2>{name}</h2>
    </li>
  );
}

function Article({ img, name, p }) {
  return (
    <div className="col">
      <div>
        <img src={img} alt={name + "_img"} />
        <div>
          <h2>{name}</h2>
          <span>Verified Buyer</span>
        </div>
      </div>
      <p>{p}</p>
    </div>
  );
}

export default function SocialProof() {
  return (
    <>
      <div className="container">
        <section>
          <article>
            <h1>10,000+ of our users love our products.</h1>
            <p>
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </article>
          <ul className="ratings">
            <Stars name="Rated 5 Stars in Reviews" />
            <Stars name=" Rated 5 Stars in Report Guru" />
            <Stars name="Rated 5 Stars in BestTech" />
          </ul>
        </section>
        <section className="sec2">
          <div className="flex">
            <Article
              name="Colton Smith "
              p="We needed the same printed design as the one we had ordered a week prior.
              Not only did they find the original order, but we also received it in time.
              Excellent!"
              img={colton}
            />
            <Article
              name=" Irene Roberts "
              p="Customer service is always excellent and very quick turn around. Completely
              delighted with the simplicity of the purchase and the speed of delivery."
              img={irene}
            />

            <Article
              name="Anne Wallace "
              p="Put an order with this company and can only praise them for the very high
              standard. Will definitely use them again and recommend them to everyone!"
              img={anne}
            />
          </div>
        </section>
      </div>
    </>
  );
}
