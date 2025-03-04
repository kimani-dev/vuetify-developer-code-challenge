import type Blog from "./Blog";

export default interface Author {
  name: string;
  email: string;
  blogs?: Blog[];
}
