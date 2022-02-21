import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import {IArticle} from "../../types/article.type";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import moment from "moment";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ArticleCard = ({ article }: { article: IArticle }) => {
  return (
    <Card
    variant="outlined"
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "center",
      }}
    >
      <Link href={`/articles/${article.id}`} color="inherit" underline="none">
        <CardActionArea>
          <CardMedia
            sx={{ height: 140 }}
            image={article.imageUrl}
            title={article.title}
          />
          <CardContent>
            <Box sx={{ mt: 2, mb: 1, display:'inline-flex', alignItems:'center'}}>
              <CalendarTodayOutlinedIcon style={{fontSize: '12px', marginRight:5, color:'grey'}}/>
              <Typography style={{ color:'grey', fontSize: 12}}>  {moment(article.publishedAt).format("LL")}</Typography>       
            </Box>
            <Typography variant="h6" align="left" style={{lineHeight:1.3, fontWeight:300}}>
              {article.title}
            </Typography>
          </CardContent>
          <Typography
            sx={{ m: 2 }}
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            {article.summary}
          </Typography>
        </CardActionArea>
      </Link>
      <Link sx={{ fontSize: 12, mt: 1,mb:2,ml:2, fontWeight:'bold'}} href={`/articles/${article.id}`} color="inherit" underline="none">
        Read more {' '}
        <ArrowForwardIcon style={{fontSize: '12px'}}/>
      </Link>
    </Card>
  );
};

export default ArticleCard;
