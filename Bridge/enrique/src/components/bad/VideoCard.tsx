import { Video } from '@/data/mockData'
export default function VideoCard({ item }: { item: Video }) {
return (
<article className="card">
<img src={item.thumbnail} alt={item.title} className="media" />
<h3 className="title mt-2">{item.title}</h3>
<p className="meta">{item.duration}</p>
</article>
)
}