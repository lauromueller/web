export type ParseArticleUrlParams = {
  filePath: string;
  slug: string;
};

export const parseArticleUrl = ({
  filePath,
  slug,
}: ParseArticleUrlParams): string => {
  const split = filePath.split(/.*(?:src).*/);
  return `${split[split.length - 1]}/${slug}`;
};
