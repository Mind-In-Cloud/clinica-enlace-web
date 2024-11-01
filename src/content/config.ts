// Import utilities from `astro:content`
import { z, defineCollection, reference } from "astro:content";
// Define a `type` and `schema` for each collection
const medicosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    blog: z.string().optional(),
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

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    seoImage: z.string(),
    seoDescription: z.string(),
    summary: z.string(),
    author: reference('medicos'),
    categorias: z.array(reference('categorias')),
    related: z.array(z.string()),
    mainImage: z.string(),
  })
});

const categoriasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    seoImage: z.string(),
    seoDescription: z.string(),
    mainImage: z.string(),
  })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  medicos: medicosCollection,
  servicios: serviciosCollection,
  blog: blogCollection,
  categorias: categoriasCollection
};
