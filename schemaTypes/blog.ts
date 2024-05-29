import { defineField, defineType } from "sanity";

export const blogType = defineType({
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title of blog article'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog article',
      options: {
        source: 'title'
      }
    }),
    defineField({
      name: 'titleImage',
      type: 'image',
      title: 'Title Image'
    }),
    defineField({
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description'
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline'},
              { title: 'Code', value: 'code'},
            ]
          }
        },
        {
          type: 'image',
          options: { inline: true }
        },
      ]
    }),
    defineField({
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{ type: 'author' }]
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At'
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'titleImage',
      smallDescription: 'smallDescription'
    },
    prepare(selection) {
      const { title, media, smallDescription } = selection;
      return {
        title,
        media,
        subtitle: smallDescription
      }
    }
  }
});
