// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});

const medicosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seoImage: z.string(),
    info: z.string(),
    photo: z.string(),
    especialidad: z.string(),
    centros: z.array(z.string()),
    tags: z.array(z.string())
  })
});

const serviciosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seoImage: z.string(),
  })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  medicos: medicosCollection,
  servicios: serviciosCollection,
};
