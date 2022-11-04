import { serialize } from "next-mdx-remote/serialize";
import { IArticle } from "../types";

export const debounce = (fn: (query: string) => void, timeout = 300) => {
  let timer: NodeJS.Timeout;
  const debounced = (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };
  return debounced;
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const makeCategory = (slug: string): string => {
  if (typeof slug === "string") {
    return slug?.split("-")?.join(" ");
  }
  return "";
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const serializeMarkdown = async (item: IArticle) => {
  const body = await serialize(item?.attributes?.body as string);
  return {
    ...item,
    attributes: {
      ...item?.attributes,
      body,
    },
  };
};
