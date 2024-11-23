import type { SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { homepage } from "./homepage";
import { about } from "./about";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, homepage, about],
};
