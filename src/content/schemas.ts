import { z } from 'astro:content';

import { multiLingualSchema } from '@utils/zod.ts';

// Shared, per-file content schemas. Components import these to validate their
// JSON at build time; the test suite imports the same schemas to guarantee the
// content stays well-formed for both locales without drifting from the app.

export const homeSchema = multiLingualSchema(
  z.object({
    eyebrow: z.string(),
    title: z.string(),
    intro: z.string(),
    pills: z.array(z.string()),
    coursesCta: z.string(),
    askCta: z.string(),
    teachers: z.object({
      title: z.string(),
      tagline: z.string(),
      cta: z.string(),
    }),
    banner: z
      .object({
        message: z.string(),
        linkText: z.string(),
        linkUrl: z.string(),
      })
      .optional(),
  }),
);

// Full `courses.json` shape — shared by both Courses.astro (days) and
// Levels.astro (levels), which each read a subset.
export const coursesSchema = multiLingualSchema(
  z.object({
    title: z.string(),
    subtitle: z.string(),
    levelNoteText: z.string(),
    levelNoteLink: z.string(),
    days: z.array(
      z.object({
        name: z.string(),
        note: z.string().optional(),
        lessons: z.array(
          z.object({
            time: z.string(),
            level: z.string(),
            location: z.string().optional(),
            ceflevel: z.string(),
          }),
        ),
      }),
    ),
    levelsTitle: z.string(),
    levelsDescription: z.string(),
    levels: z.array(
      z.object({
        name: z.string(),
        userType: z.string(),
        description: z.string(),
        subLevels: z.array(
          z.object({
            cefr: z.string(),
            label: z.string(),
            description: z.string(),
          }),
        ),
      }),
    ),
  }),
);

export const feesSchema = multiLingualSchema(
  z.object({
    title: z.string(),
    note: z.string(),
    groupCoursesTitle: z.string(),
    groupCoursesDescription: z.string(),
    groupCourses: z.array(
      z.object({
        length: z.number(),
        normalRate: z.number(),
        reducedRate: z.number(),
        description: z.string(),
      }),
    ),
    privateCoursesTitle: z.string(),
    privateCoursesDescription: z.string(),
    privateCourses: z.array(
      z.object({
        length: z.number(),
        onePersonRate: z.number(),
        twoPersonsRate: z.number(),
        threePersonsRate: z.number(),
        description: z.string(),
      }),
    ),
  }),
);

export const contactSchema = multiLingualSchema(
  z.object({
    title: z.string(),
    description: z.string(),
    email: z.string().email(),
    mapsLabel: z.string(),
    teachersContact: z.array(
      z.object({
        name: z.string(),
        email: z.string().email(),
        phone: z.string(),
      }),
    ),
    address: z.string(),
  }),
);

export const teamSchema = multiLingualSchema(
  z.object({
    title: z.string(),
    qualificationsTitle: z.string(),
    meet: z.object({
      title: z.string(),
      text: z.string(),
      contactCta: z.string(),
      coursesCta: z.string(),
    }),
    teachers: z.array(
      z.object({
        name: z.string(),
        tagline: z.string(),
        description: z.string(),
        image: z.string(),
        certificates: z.array(z.object({ name: z.string() })),
      }),
    ),
  }),
);
