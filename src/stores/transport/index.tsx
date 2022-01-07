import ArticleTransport from "./article";
import AuthTransport from "./auth";
import UserTransport from "./user";

export const transport = {
  authTransport: AuthTransport,
  userTransport: UserTransport,
  articleTransport: ArticleTransport,
};
