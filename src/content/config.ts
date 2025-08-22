import { defineCollection, z } from "astro:content";

const solutionCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    list_title: z.string(),
    list_sub_title: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    logo_small: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    logo_large: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    parallax: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    gallery: z
      .array(
        z.object({
          title: z.string(),
          caption: z.string().nullable().optional(),
          src: z.string(),
          alt: z.string().nullable().optional(),
        })
      )
      .nullable()
      .optional(),
    order: z.number(),
    view_title: z.string(),
    view_sub_title: z.string(),
    view_text: z.string(),
    url: z.string(),
    custom_action_name: z.string().nullable().optional(),
    custom_action_url: z.string().nullable().optional(),
  }),
});

const servicesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

const aboutCollection = defineCollection({
  schema: z.object({
    values: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    gallery_image: z.array(
      z.object({
        title: z.string(),
        caption: z.string(),
        src: z.string(),
        alt: z.string(),
      })
    ),
  }),
});

const careerCollection = defineCollection({
  schema: z.object({
    image: z.object({
      title: z.string(),
      caption: z.string(),
      src: z.string(),
      alt: z.string(),
    }),
    order: z.number()
  }),
});

export const collections = {
  solutions: solutionCollection,
  services: servicesCollection,
  about: aboutCollection,
  careers: careerCollection,
};
