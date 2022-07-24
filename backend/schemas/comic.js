export default {
  name: 'comic',
  type: 'document',
	title: 'Comic',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Comic Post Title (Date by mo-day-yr_#)'
    },
    {
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
      title: 'Upload an Image'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }

  ]
}