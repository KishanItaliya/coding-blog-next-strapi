import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatDate } from "../utils";
import { IArticle } from "../types";

interface IPropTypes {
  article: IArticle;
}

const BlogCard = ({ article }: IPropTypes) => {
  return (
    <div>
      <Link href={`/article/${article?.attributes?.slug}`}>
        <h1 className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
          {article?.attributes?.title}
        </h1>
      </Link>
      <div className="flex items-center my-4 space-x-2">
        <div className="rounded-lg overflow-hidden flex items-center justify-center">
          <Image
            src={`${article?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.formats?.thumbnail?.url}`}
            height={40}
            width={40}
          />
        </div>
        <span className="text-sm font-bold text-gray-600">
          {article?.attributes?.author?.data?.attributes?.firstName}{" "}
          {article?.attributes?.author?.data?.attributes?.lastName} on{" "}
          <span className="text-gray-400">
            {formatDate(article?.attributes?.createdAt)}
          </span>
        </span>
      </div>
      <div className="text-gray-500">
        {article?.attributes?.shortDescription?.slice(0, 250)}
        {article?.attributes?.shortDescription?.length > 250 && `...`}
      </div>
    </div>
  );
};

export default BlogCard;
