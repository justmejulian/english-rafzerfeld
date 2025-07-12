import { marked } from 'marked';

export function compoentFromString(markdown: string) {
const markdownContent = marked.parse(markdown);

  return <div class="markdown" set:html={markdownContent} />
}
