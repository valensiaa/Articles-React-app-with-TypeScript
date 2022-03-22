import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

const ArticleInfo = ({ articleInfo }: { articleInfo: any }) => {
  return (
    <Box>
      <img src={articleInfo.imageUrl} alt='' />
      <Box sx={{ m: 2 }}>
        <Typography variant="h4" align="left" sx={{ m: 1 }}>
          {articleInfo.title}
        </Typography>

        <Typography
          variant="body1"
          color="textSecondary"
          component="p"
        >
          {articleInfo.summary}
        </Typography>
      </Box>
      <Breadcrumbs aria-label="breadcrumb">
        <ArrowBackIosOutlinedIcon />
        <Link color="inherit" underline="hover" href="/">
          Back to homepage
        </Link>
      </Breadcrumbs>
    </Box>
  );
};

export default ArticleInfo;
