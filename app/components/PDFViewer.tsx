"use client";

import { GlobalWorkerOptions } from "pdfjs-dist";
import { Root, Pages, Page, CanvasLayer } from "@unriddle-ai/lector";
import "pdfjs-dist/web/pdf_viewer.css";

// Set up the worker
GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.mjs",
  import.meta.url
).toString();

export default function PDFViewer() {
  return (
    <Root fileURL="/preview.pdf">
      <Pages>
        <Page>
          <CanvasLayer />
        </Page>
      </Pages>
    </Root>
  );
}
