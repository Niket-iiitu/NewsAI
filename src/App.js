import React from "react";
import alanBTn from "@alan-ai/alan-sdk-web";

import NewsCard from "./Cards/NewsCards";
import useStyles from "./style";

//Alan AI used to create voice for this site.
const ALAN_KEY = process.env.REACT_APP_ALAN_AI_KEY;

const App = () => {
  const [newsArticles, setNewsArticles] = React.useState([]);
  const [activeArticle, setActiveArticle] = React.useState(-1);
  const classes = useStyles();

  React.useEffect(() => {
    console.log(ALAN_KEY);
    alanBTn({
      key: ALAN_KEY,
      onCommand: (order) => {
        console.log(order);
        if (order.command === "TestCommand") {
          alert("At News AI");
        } else if (order.command === "NewHeadLines") {
          setNewsArticles(order.savedArticles);
          setActiveArticle(-1);
        } else if (order.command === "HighligthArticle") {
          setActiveArticle(order.article);
        } else if (order.command === "OpenArticle") {
          window.open(order.link, "_blank");
        }
      },
    });
  }, []);

  return (
    <div>
      <h1
        className={classes.logoContainer}
        style={{
          backgroundImage:
            "url(https://github.com/Niket-iiitu/NewsAI/blob/main/public/images/LogoWallpaper.jpg)",
        }}
      >
        News AI
      </h1>
      <NewsCard articles={newsArticles} activeArticle={activeArticle} />
      <div>
        <p>
          <center>
            Wand to share some news of your own?{" "}
            <a href="https://niket-iiitu.github.io/Memories/">
              <i>Click Here</i>
            </a>
          </center>
        </p>
      </div>
    </div>
  );
};

export default App;
