import React from "react";
import styles from "./Bio.module.css";
import { getGravatarURL } from "../utils/getGravatarURL";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
        (Planning on) writing about memetics, constructor theory, humanism,
        American politics, Chinese totalitarianism, free speech, techonology,
        AI, quantum computing, yadayada.
        <br />
        <b>Dwarkesh Patel</b> • CS student at UT Austin
        <br />
        dwarkesh.sanjay.patel@gmail.com •{" "}
        <a href="https://gitlab.com/dwarkeshsp/">Gitlab</a>
      </p>
    </div>
  );
}

export default Bio;
