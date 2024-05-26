import { defineField, defineType } from "sanity";

export const authorType = defineType({
    name: 'author',
    type: 'document',
    fields: [
        defineField({
            name: 'authorName',
            type: 'string',
            title: 'Name of the author'
        }),
        defineField({
            name: 'authorDescription',
            type: 'string',
            title: 'Description of the author'
        }),
        defineField({
            name: 'authorImage',
            type: 'image',
            title: 'Image of the author'
        })
    ]
})
