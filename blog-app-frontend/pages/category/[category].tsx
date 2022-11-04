import { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import qs from "qs";
import { fetchArticles, fetchCategories } from "../../api";
import Tabs from "../../components/Tabs";
import {
  IArticle,
  ICategory,
  ICollectionResponse,
  IPagination,
  IQueryOptions,
} from "../../types";
import { capitalizeFirstLetter, debounce, makeCategory } from "../../utils";
import ArticleList from "../../components/ArticleList";
import Pagination from "../../components/Pagination";

interface IPropTypes {
  categories: {
    items: ICategory[];
  };
  articles: {
    items: IArticle[];
    pagination: IPagination;
  };
  slug: string;
}

const Category = ({ categories, articles, slug }: IPropTypes) => {
  const router = useRouter();
  const { page, pageCount } = articles?.pagination;
  const { category } = router?.query;

  const handleSearch = (query: string) => {
    router.push({
      pathname: `/category/${category}`,
      query: {
        search: query,
      },
    });
  };

  const formattedCategory = () => {
    return capitalizeFirstLetter(makeCategory(slug));
  };
  return (
    <>
      <Head>
        <title>Tech Blog {formattedCategory()}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Tabs
        categories={categories?.items}
        handleOnSearch={debounce(handleSearch, 500)}
      />

      <ArticleList articles={articles?.items} />

      <Pagination
        page={page}
        pageCount={pageCount}
        redirectUrl={`/category/${category}`}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // categories
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await fetchCategories();

  // articles
  const options: IQueryOptions = {
    populate: ["author.avatar"],
    sort: ["id:desc"],
    filters: {
      category: {
        slug: query?.category || "",
      },
    },
    pagination: {
      page: query?.page ? +query.page : 1,
      pageSize: 1,
    },
  };

  if (query?.search) {
    options.filters = {
      title: {
        $containsi: query.search,
      },
    };
  }

  const queryString = qs.stringify(options);

  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticles(queryString);

  return {
    props: {
      categories: {
        items: categories?.data || [],
      },
      articles: {
        items: articles?.data || [],
        pagination: articles?.meta?.pagination || {},
      },
      slug: query?.category,
    },
  };
};

export default Category;
