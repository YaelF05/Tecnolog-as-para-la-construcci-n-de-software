import { Video } from '@/data/mockData'
export default function VideoListItem({ item }: { item: Video }) {
return (
<li className="flex items-center gap-3">
<img src={item.thumbnail} alt={item.title} className="w-20 h-14 object-cover rounded-lg" />
<div>
<p className="title">{item.title}</p>
<span className="meta">{item.duration}</span>
</div>
</li>
)
}