import { Video } from '@/data/mockData'
export default function VideoFeatured({ item }: { item: Video }) {
return (
<article className="card">
<img src={item.thumbnail} alt={item.title} className="media" />
<h2 className="title text-xl mt-2">{item.title}</h2>
<p className="meta">{item.duration}</p>
</article>
)
}