import React from "react";
import { IArticle } from "../types";
import BlogCard from "./BlogCard";
import BlogCardWithImage from "./BlogCardWithImage";

interface IPropTypes {
  articles: IArticle[];
}

const ArticleList = ({ articles }: IPropTypes) => {
  return (
    <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-8">
      {articles?.map((article, index) => {
        return index === 1 ? (
          <BlogCardWithImage key={article.id} article={article} />
        ) : (
          <BlogCard key={article.id} article={article} />
        );
      })}
    </div>
  );
};

export default ArticleList;
