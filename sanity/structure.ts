/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ListItemBuilder, StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Krishna's Portfolio")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.listItem()
        .title("Homepage")
        .child(S.document().schemaType("homepage").documentId("homepage")),
      ...S.documentTypeListItems().filter(
        (listItem: ListItemBuilder) =>
          !["siteSettings", "homepage"].includes(listItem.getId() as string)
      ),
    ]);
