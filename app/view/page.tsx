import { GlobalWorkerOptions } from "pdfjs-dist";
import { Root, Pages, Page, CanvasLayer } from "@unriddle-ai/lector";
import "pdfjs-dist/web/pdf_viewer.css";

// Set up the worker
GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.mjs",
  import.meta.url
).toString();

export function PDFViewer() {
  return (
    <Root fileURL="/sample.pdf">
      <Pages>
        <Page>
          <CanvasLayer />
        </Page>
      </Pages>
    </Root>
  );
}
