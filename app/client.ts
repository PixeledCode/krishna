import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId:
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
    process.env.SANITY_STUDIO_DATASET_PROJECT_ID,
  dataset:
    process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET,
  useCdn: false,
  apiVersion: "2024-10-26",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}

export async function getDocument() {
  const document = await client.fetch('*[_type == "homepage"][0]');
  return document;
}
