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
      name: "resume",
      title: "Resume link",
      type: "string",
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
