import { Article } from '@/data/mockData'
export default function ArticleListItem({ item }: { item: Article }) {
return (
<li className="flex items-center gap-3">
<img src={item.image} alt={item.title} className="w-20 h-14 object-cover rounded-lg" />
<div>
<p className="title">{item.title}</p>
<span className="meta">{item.author}</span>
</div>
</li>
)
}