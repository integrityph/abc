import { defineCollection, z } from 'astro:content';

const solutionCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    list_title: z.string(),
    list_sub_title: z.string(),
		image: z.string(),
		logo_small: z.string(),
		logo_large: z.string(),
		order: z.number(),
		view_title: z.string(),
		view_sub_title: z.string(),
		url: z.string(),
		custom_action_name: z.string().nullable().optional(),
		custom_action_url: z.string().nullable().optional(),
  }),
});

export const collections = {
  solutions: solutionCollection,
};