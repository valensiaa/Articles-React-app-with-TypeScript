import { Backdrop, CircularProgress, Grid } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import ArticleCard from "../../components/articleCard/ArticleCard";
import FilterField from "../../components/filterFields/FilterField";
import { Article } from "../../services/api";
import {IArticle} from "../../types/article.type";


const ArticlesContainer = () => {
   const [open, setOpen]: [boolean, (open: boolean) => void] =
    useState<boolean>(false);
  const handleClose = () => setOpen(false);
  
  const [searchInput, setSearchInput]: [string, (searchInput: string) => void] =
    useState("");
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [articlesSearch, setArticlesSearch] = useState<IArticle[]>([]);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");


  useEffect(() => {
    setOpen(!open);
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

  const handleInput = useCallback((e: any) => {
    let str = e.target.value;
    setSearchInput(str)
    const newArr = articles.filter(item => 
      item.title?.toLowerCase().includes(str.toLowerCase()) ||
      item.summary?.toLowerCase().includes(str.toLowerCase())
      )
      .map(item => {
         let newTitle = item.title?.replace(
            new RegExp(str, 'gi'),
            match =>
            `<mark style='background:yellow'>${match}</mark>`
         )
         let newBody = item.summary?.replace(
            new RegExp(str, 'gi'),
            match =>
            `<mark style='background:yellow'>${match}</mark>`
         )
         return {
            ...item,
            title: newTitle,
            summary: newBody
         }
      })
      setArticlesSearch(newArr);
  },[articles]);

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
          <FilterField handleCb={handleInput}/>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {searchInput.length > 0 ? 
            articlesSearch.map((item) => (
              <Grid key={item.id} item xs={2} sm={4}>
                <ArticleCard article={item}/>
              </Grid>
            )) : articles.map((item) => (
              <Grid key={item.id} item xs={2} sm={4}>
                <ArticleCard article={item}/>
              </Grid>
            ))
          }
          </Grid>
        </div>
      )}
    </>
  );
};

export default ArticlesContainer;
