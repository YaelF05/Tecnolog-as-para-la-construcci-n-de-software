// src/components/bad/ArticleHero.tsx
import { Article } from '@/data/mockData'
export default function ArticleHero({ item }: { item: Article }) {
return (
<section className="card grid md:grid-cols-2 gap-4">
<img src={item.image} alt={item.title} className="media md:h-72" />
<div className="flex flex-col justify-center">
<h1 className="title text-3xl">{item.title}</h1>
<p className="meta">Por {item.author}</p>
<p className="mt-2 text-gray-700">{item.excerpt}</p>
<a className="cta mt-3">Leer</a>
</div>
</section>
)
}