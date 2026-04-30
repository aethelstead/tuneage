import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const games = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/games" }),
    schema: z.object({
        title: z.string(),
        sections: z.array(
            z.object({
                title: z.string(),
                links: z.array(z.string()),
            })
        ),
    }),
});

export const collections = {
    games,
};