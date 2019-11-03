import React from "react";
import styles from "./Bio.module.css";
import { getGravatarURL } from "../utils/getGravatarURL";

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "test1@example.com",
    size: 56
  });

  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ""}
    `}
    >
      {/* <img src={photoURL} alt="Me" />
      <p>
        Create a blog with a single command, by{' '}
        <a href="https://twitter.com/james_k_nelson/">James K Nelson</a>.
        <br />
        Themed after Gatsby's blog starter and Dan Abramov's{' '}
        <a href="https://overreacted.io/">overreacted.io</a>.<br />
        Based on{' '}
        <a href="https://facebook.github.io/create-react-app/">
          create-react-app
        </a>
        , <a href="https://mdxjs.com/">MDX</a>, and{' '}
        <a href="https://frontarm.com/navi/">Navi</a>.
      </p> */}
      <p>
        <b>Dwarkesh Patel</b> • CS student at UT Austin
        <br />
        <a href="mailto:dwarkesh.sanjay.patel@gmail.com">Email</a>
        {" • "}
        <a href="https://gitlab.com/dwarkeshsp/">Gitlab</a>
        <br />
        Memetics, etc • Looking for criticism and refutations. Email me.
        <br />
        <a href="https://www.youtube.com/watch?v=KzGjEkp772s">
          Short intro video on memetics
        </a>
        {" • "}I recommend reading the chapters on
        <i> The Evolution of Culture </i>and
        <i> The Evolution of Creativity </i>in{" "}
        <a href="https://www.amazon.com/Beginning-Infinity-Explanations-Transform-World/dp/0143121359/ref=sr_1_1?crid=33HK3588KR3DC&keywords=the+beginning+of+infinity&qid=1572742336&sprefix=the+beginning+%2Caps%2C191&sr=8-1">
          The Beginning of Infinity
        </a>
      </p>
    </div>
  );
}

export default Bio;
