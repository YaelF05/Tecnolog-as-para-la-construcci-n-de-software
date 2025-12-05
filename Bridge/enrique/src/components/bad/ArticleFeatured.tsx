import { Article } from '@/data/mockData'
export default function ArticleFeatured({ item }: { item: Article }) {
return (
<article className="card">
<img src={item.image} alt={item.title} className="media" />
<h2 className="title text-xl mt-2">{item.title}</h2>
<p className="meta">Por {item.author}</p>
<p className="text-gray-700 mt-1">{item.excerpt}</p>
</article>
)
}