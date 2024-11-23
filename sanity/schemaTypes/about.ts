import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "headerImage",
      title: "Header Image",
      type: "image",
    }),
    defineField({
      type: "markdown",
      description: "Heading text",
      name: "headingText",
    }),
    defineField({
      name: "collageImage",
      title: "Collage Image",
      type: "image",
    }),
    defineField({
      name: "footerSubtitle",
      title: "Footer Subtitle",
      type: "string",
    }),
    defineField({
      name: "footerText",
      title: "Footer title",
      type: "markdown",
    }),
  ],
});
