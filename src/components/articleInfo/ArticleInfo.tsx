import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import {IArticle} from "../../types/article.type";

const ArticleInfo = ({ articleInfo }: {articleInfo:any}) => {
  console.log(articleInfo)
  return (
    <Box>
      <img src={articleInfo.imageUrl} />
      <Box>
        <Typography>{articleInfo.title}</Typography>
        {articleInfo.summary}
      </Box>
      <Breadcrumbs aria-label="breadcrumb">
         <ArrowBackIosOutlinedIcon/>
        <Link color="inherit" underline="hover" href="/">
          Back to homepage
        </Link>
      </Breadcrumbs>
    </Box>
  );
};

export default ArticleInfo;
