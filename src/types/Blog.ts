import type Author from "./Author";

export default interface Blog {
  title: string;
  image: string;
  text: string;
  date: string;
  featured: boolean;
  pinned: boolean;
  author: Author;
}
