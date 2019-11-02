import React from "react";
import { Link } from "react-navi";
import Divider from "@material-ui/core/Divider";
import ArticleMeta from "./ArticleMeta";
import styles from "./ArticleSummary.module.css";

function ArticleSummary({ blogRoot, route }) {
  return (
    <div>
      <article className={styles.ArticleSummary}>
        <Link href={route.url.href}>
          <div>
            <h2>{route.title}</h2>
            <ArticleMeta blogRoot={blogRoot} meta={route.data} />
            <p>{route.data.spoiler}</p>
          </div>
        </Link>
      </article>
      <Divider light variant="middle" component="li" />
    </div>
  );
}

export default ArticleSummary;
