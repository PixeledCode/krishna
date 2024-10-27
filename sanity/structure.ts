/* eslint-disable @typescript-eslint/no-explicit-any */
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      ...S.documentTypeListItems().filter(
        // biome-ignore lint/suspicious/noExplicitAny: reason
        (listItem: any) => !["siteSettings"].includes(listItem.getId())
      ),
    ]);
