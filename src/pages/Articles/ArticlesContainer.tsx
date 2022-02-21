import { Backdrop, CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ArticleCard from "../../components/articleCard/ArticleCard";
import FilterField from "../../components/filterFields/FilterField";
import { Article } from "../../services/api";
import {IArticle} from "../../types/article.type";

const ArticlesContainer = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() => {
    handleToggle();
    Article.getArticles(21)
      .then((response) => {
        setArticles(response.data);
        setLoading(false);
      })
      .catch((e) => {
        const error =
          e.response.status === 404
            ? "Resource Not Found"
            : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
      });
  }, []);

  const [open, setOpen]: [boolean, (open: boolean) => void] =
    useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {loading ? (
        <Backdrop
          onClick={handleClose}
          open={open}
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <FilterField />
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {articles.map((item) => (
              <Grid key={item.id} item xs={2} sm={4}>
                <ArticleCard article={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
};

export default ArticlesContainer;
