// Índice de búsqueda estático (build-time). Desacopla la búsqueda de la paginación:
// el cliente descarga este JSON una vez y busca sobre TODOS los posts, no solo la
// página cargada. Sin dependencias ni backend. Upgrade path: Pagefind si algún día
// hace falta full-text sobre cientos/miles de documentos.
import { getCollection } from 'astro:content';
import { getCategory } from '../../data/blog';

export async function GET() {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

  const index = posts.map((p) => ({
    title: p.data.title,
    description: p.data.description,
    url: `/blog/${p.id}/`,
    category: getCategory(p.data.category)?.name ?? '',
    categorySlug: p.data.category,
    keywords: p.data.keywords ?? [],
    // texto normalizado para el filtro cliente
    search: [p.data.title, p.data.description, getCategory(p.data.category)?.name ?? '', ...(p.data.keywords ?? [])]
      .join(' ')
      .toLowerCase(),
  }));

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
