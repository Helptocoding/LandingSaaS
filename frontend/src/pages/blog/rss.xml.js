import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getCategory } from '../../data/blog';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

  const site = context.site?.toString().replace(/\/$/, '') ?? 'https://www.saaslyvet.com';

  return rss({
    title: 'Blog de SaaslyVet',
    description:
      'Guías prácticas sobre software y gestión veterinaria: agenda, expediente, inventario, cobros, automatización y marketing para clínicas.',
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.id}/`,
      categories: [getCategory(post.data.category)?.name ?? post.data.category],
    })),
    customData: `<language>es-mx</language>`,
    trailingSlash: false,
  });
}
