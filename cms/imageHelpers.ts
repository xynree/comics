import imageUrlBuilder from '@sanity/image-url'
import client from './client'
import { Image } from '../types/types'

const builder = imageUrlBuilder(client)

export const getSrcFromImg = (image:Image) => builder.image(image).url()