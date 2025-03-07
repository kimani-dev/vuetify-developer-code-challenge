import type Author from "./Author";

export default interface Blog {
  id: string;
  title: string;
  image: string;
  text: string;
  date: string;
  featured: boolean;
  pinned: boolean;
  draft: boolean;
  type: string;
  author: Author;
}
