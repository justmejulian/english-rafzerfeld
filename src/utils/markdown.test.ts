import { describe, expect, it } from 'vitest';

import { renderMarkdown } from '@utils/markdown.ts';

describe('renderMarkdown', () => {
  it('keeps fee note lists and safe links', () => {
    const html = renderMarkdown(
      '- First note\n- [Details](https://example.com)',
    );
    expect(html).toContain('<li>First note</li>');
    expect(html).toContain('href="https://example.com"');
  });

  it('removes executable HTML and unsafe link schemes', () => {
    const html = renderMarkdown(
      '<img src="x" onerror="alert(1)">\n\n[Click](javascript:alert(1))',
    );
    expect(html).not.toMatch(/<img|onerror|javascript:/i);
  });
});
