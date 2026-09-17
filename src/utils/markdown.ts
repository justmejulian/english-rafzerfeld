import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

export function renderMarkdown(markdown: string): string {
  return sanitizeHtml(marked.parse(markdown) as string, {
    allowedTags: sanitizeHtml.defaults.allowedTags,
    allowedAttributes: {
      a: ['href', 'title'],
    },
    allowedSchemes: ['http', 'https', 'mailto'],
  });
}
