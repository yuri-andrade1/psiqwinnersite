import {defineArrayMember, defineField, defineType} from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'Artigo',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Título', type: 'string', validation: (rule) => rule.required().max(120)}),
    defineField({name: 'slug', title: 'Slug (URL)', type: 'slug', options: {source: 'title', maxLength: 96}, validation: (rule) => rule.required()}),
    defineField({name: 'coverImage', title: 'Imagem de capa', type: 'image', options: {hotspot: true}, fields: [defineField({name: 'alt', title: 'Descrição da imagem', type: 'string', validation: (rule) => rule.required()})]}),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          {title: 'Ansiedade', value: 'Ansiedade'},
          {title: 'Burnout e Esgotamento', value: 'Burnout'},
          {title: 'Depressão', value: 'Depressão'},
          {title: 'Autoestima', value: 'Autoestima'},
          {title: 'Relacionamentos', value: 'Relacionamentos'},
          {title: 'Luto', value: 'Luto'},
          {title: 'Bem-estar', value: 'Bem-estar'}
        ]
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.required()
    }),
    defineField({name: 'excerpt', title: 'Resumo', type: 'text', rows: 3, validation: (rule) => rule.required().max(280)}),
    defineField({
      name: 'body',
      title: 'Conteúdo',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Título 2', value: 'h2'},
            {title: 'Título 3', value: 'h3'},
            {title: 'Citação', value: 'blockquote'}
          ],
          lists: [
            {title: 'Marcadores', value: 'bullet'},
            {title: 'Numerada', value: 'number'}
          ],
          marks: {
            decorators: [
              {title: 'Negrito', value: 'strong'},
              {title: 'Itálico', value: 'em'}
            ],
            annotations: [
              {
                name: 'link',
                title: 'Link',
                type: 'object',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: (rule) => rule.uri({scheme: ['http', 'https', 'mailto']})
                  })
                ]
              }
            ]
          }
        }),
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Descrição da imagem',
              type: 'string',
              validation: (rule) => rule.required()
            })
          ]
        })
      ],
      validation: (rule) => rule.required()
    }),
    defineField({name: 'publishedAt', title: 'Data de publicação', type: 'datetime', initialValue: () => new Date().toISOString(), validation: (rule) => rule.required()}),
    defineField({name: 'author', title: 'Autor', type: 'string', initialValue: 'Dr. Psiwinner', validation: (rule) => rule.required()}),
  ],
  preview: {select: {title: 'title', subtitle: 'author', media: 'coverImage'}},
});
