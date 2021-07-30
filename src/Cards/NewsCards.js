import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";

import NCard from "./Card/NCard";
import useStyles from "./style";

const infoCards = [
  { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "News on PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "News from CNN",
  },
];

const NewsCard = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (articles === undefined || articles.length === 0) {
    return (
      <div style={{ width: "100%" }}>
        <div className={classes.topInstruction}>
          <p>
            Say <i>who created this site </i> to know more.
          </p>
        </div>
        <div style={{ width: "100%" }}>
          <Grow in>
            <Grid
              className={classes.container}
              container
              alignItems="stretch"
              spacing={3}
            >
              {infoCards.map((infoCard) => (
                <Grid
                  items
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className={classes.infoCard}
                >
                  <div
                    className={classes.card}
                    style={{ backgroundColor: infoCard.color }}
                  >
                    <Typography varient="h5">{infoCard.title}</Typography>
                    {infoCard.info ? (
                      <Typography variant="h6">
                        <strong>{infoCard.title.split(" ")[2]}:</strong>
                        <br />
                        {infoCard.info}
                      </Typography>
                    ) : null}
                    <Typography variant="h6">
                      Try saying: <br /> <i>{infoCard.text}</i>
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grow>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: "100%" }}>
      <div className={classes.topInstruction}>
        <p>
          Try saying <i>open article number 1</i>.
          <br />
          <center>
            Say <i>home</i> to return.
          </center>
        </p>
      </div>
      <div style={{ width: "100%" }}>
        <Grow in>
          <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
          >
            {articles.map((article, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  style={{ display: "flex" }}
                >
                  <NCard
                    article={article}
                    index={index}
                    activeArticle={activeArticle}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grow>
      </div>
    </div>
  );
};

export default NewsCard;
