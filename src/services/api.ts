import axios from 'axios'
import {IArticle} from '../types/article.type';
import { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: "https://api.spaceflightnewsapi.net/v3/",
  headers: {
    "Content-type": "application/json"
  }
});
const requests = {
   get: (url:string) => instance.get(url)
}

export const Article = {
   getArticles: (lim:number): Promise<AxiosResponse<IArticle[]>> => requests.get(`articles?_limit=${lim}`),
   getArticle: (id: string | undefined): Promise<AxiosResponse<IArticle>> => requests.get(`articles/${id}`)
}