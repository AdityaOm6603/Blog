import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
          Welcome to Blogger's Corner , where every click leads you on a journey
          of discovery, inspiration, and insight. We are thrilled to unveil our
          newly launched blog website, designed with the intention of creating a
          vibrant online community centered around [your blog's focus or niche].
        </p>
        <p>
          Our team of passionate writers and contributors are dedicated to
          curating engaging and informative articles that resonate with our
          readers. From exploring the latest trends and developments in
          [relevant topic] to delving into timeless themes of [relevant theme],
          we strive to offer something for everyone.
        </p>
        <p>
          But Blogger's Corner is more than just a platform for sharing ideas –
          it's a community where voices are heard, stories are shared, and
          connections are forged. We invite you to join us on this journey as we
          embark on a quest for knowledge, growth, and meaningful conversation.
        </p>
        <p>
          So whether you're a seasoned reader or a newcomer to the world of
          blogging, we extend a warm welcome and invite you to explore all that
          Blogger's Corner has to offer. Together, let's embark on a journey of
          exploration, inspiration, and discovery. Welcome aboard!
        </p>
        <p>
          So let us embark on this journey with curiosity, courage, and
          collaboration, as we shape a future of work that is not only
          technologically advanced but also deeply human-centered. Together, let
          us unlock the full potential of the workforce and create a world where
          every individual has the opportunity to thrive and contribute to the
          greater good. Welcome to the future of work – where innovation meets
          collaboration, and the possibilities are endless.
        </p>
      </div>
    </article>
  );
};

export default About;
