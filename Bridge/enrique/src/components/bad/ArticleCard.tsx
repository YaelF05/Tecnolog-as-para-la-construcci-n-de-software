import { Article } from '@/data/mockData'
export default function ArticleCard({ item }: { item: Article }) {
return (
<article className="card">
<img src={item.image} alt={item.title} className="media" />
<h3 className="title mt-2">{item.title}</h3>
<p className="meta">{item.author}</p>
</article>
)
}