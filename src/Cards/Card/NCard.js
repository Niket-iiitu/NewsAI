import React, { createRef } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import useStyles from "./style";

const NCard = ({ article, index, activeArticle }) => {
  const classes = useStyles();
  const [elRef, setElRef] = React.useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  React.useEffect(() => {
    setElRef((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  React.useEffect(() => {
    if (index === activeArticle && elRef[activeArticle]) {
      scrollToRef(elRef[activeArticle]);
    }
  }, [index, elRef, activeArticle]);

  return (
    <diV>
      <Card
        className={activeArticle === index ? classes.activeCard : classes.card}
        ref={elRef[index]}
      >
        <CardActionArea href={article.url} target="_blank">
          <CardMedia
            image={
              article.urlToImage ||
              "https://ajr.org/wp-content/uploads/2014/03/NEws-3D.jpg"
            }
            className={classes.media}
          />
          <div className={classes.details}>
            <Typography varient="body2" color="textSecondary" component="h2">
              {new Date(article.publishedAt).toDateString()}
            </Typography>
            <Typography varient="body2" color="textSecondary" component="h2">
              {article.source.name}
            </Typography>
          </div>
          <Typography gutterBottom varient="h5" className={classes.title}>
            {article.title}
          </Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {article.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary">
            Read More
          </Button>
          <Typography varient="h5" color="text">
            {index + 1}
          </Typography>
        </CardActions>
      </Card>
    </diV>
  );
};

export default NCard;
