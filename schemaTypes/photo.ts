import { defineField, defineType } from 'sanity';

export const photoType = defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
      defineField({
        name: 'title',
        type: 'string',
        title: 'Title',
      }),
      defineField({
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'altText',
        type: 'string',
        title: 'Alt Text',
      }),
    ],
});