import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import * as pageProps from 'docs/data/material/components/app-bar/app-bar.md?muiMarkdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
