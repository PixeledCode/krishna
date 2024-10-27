import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "headingText",
      title: "Heading text",
      type: "text",
    }),
    defineField({
      name: "projectTitle",
      title: "Project title",
      type: "string",
    }),
    defineField({
      name: "projectText",
      title: "Project text",
      type: "text",
    }),
    defineField({
      name: "projectCards",
      title: "Project cards",
      type: "array",
      of: [
        {
          title: "Actor name",
          type: "object",
          fields: [
            {
              title: "Image",
              name: "image",
              type: "image",
            },
            {
              title: "Brand",
              name: "brand",
              type: "string",
            },
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              title: "Tags",
              name: "tags",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "footerText",
      title: "Footer text",
      type: "text",
    }),
    defineField({
      name: "linkedIn",
      title: "LinkedIn URL",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "credits",
      title: "Credits",
      type: "string",
    }),
  ],
});
