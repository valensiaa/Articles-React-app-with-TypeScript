import { Backdrop, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArticleInfo from "../../components/articleInfo/ArticleInfo";
import { Article } from "../../services/api";
import {IArticle, ParamArticleIdTypes } from "../../types/article.type";

const ArticleInfoContainer = () => {
  const { articleId } = useParams<ParamArticleIdTypes>();
  const [article, setArticle] = useState<IArticle>();
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() => {
    handleToggle();
    Article.getArticle(articleId)
      .then((response) => {
        console.log(response.data);
        setArticle(response.data);
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

  return (<>
      {loading ? (
        <Backdrop
          onClick={handleClose}
          open={open}
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <p>{error}</p> && <ArticleInfo articleInfo = {article}/>
      )}
    </>
  );
};

export default ArticleInfoContainer;
