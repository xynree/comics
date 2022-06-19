import imageUrlBuilder from '@sanity/image-url'
import client from './client'


const builder = imageUrlBuilder(client)


export const getSrcFromImg = (image) => builder.image(image).url()