export type ParseArticleUrlParams = {
  filePath: string;
  slug: string;
};

export const parseArticleUrl = ({ filePath, slug }: ParseArticleUrlParams) => {
  const split = filePath.split(/.*(?:src).*/);
  console.log(split);
  return `${split[split.length - 1]}/${slug}`;
};
