import { Video } from '@/data/mockData'
export default function VideoHero({ item }: { item: Video }) {
return (
<section className="card grid md:grid-cols-2 gap-4">
<img src={item.thumbnail} alt={item.title} className="media md:h-72" />
<div className="flex flex-col justify-center">
<h1 className="title text-3xl">{item.title}</h1>
<p className="meta">Duración {item.duration}</p>
<a className="cta mt-3">Ver</a>
</div>
</section>
)
}