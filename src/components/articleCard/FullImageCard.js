import { Card, CardActionArea, CardActions, CardContent, CardMedia, withStyles } from "@mui/material"


export const FiCard = withStyles({
   root: {
      position: 'relative'
   }
})(Card)

export const FiCardActionArea = withStyles({
   root: {
      position:'relative'
   }
})(CardActionArea)

export const FiCardActions = withStyles({
  root: {
    position: "relative"
  }
})(CardActions);

export const FiCardContent = withStyles({
  root: {
    position: "relative",
    backgroundColor: "transparent"
  }
})(CardContent);

export const FiCardMedia = withStyles({
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%"
  }
})(CardMedia);

export default {
  FiCard,
  FiCardActionArea,
  FiCardActions,
  FiCardContent,
  FiCardMedia
};