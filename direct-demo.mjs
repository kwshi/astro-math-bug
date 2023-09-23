import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkFrontmatter from "remark-frontmatter";
import { read } from "to-vfile";
import { unified } from "unified";

const file = await unified()
  .use(remarkParse)
  .use(remarkFrontmatter)
  .use(remarkMath)
  .use(remarkRehype)
  .use(rehypeKatex)
  .use(rehypeStringify)
  .process(await read("src/pages/index.md"));

console.log(String(file));
