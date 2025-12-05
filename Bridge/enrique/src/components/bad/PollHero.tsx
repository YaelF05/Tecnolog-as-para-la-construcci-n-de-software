import { Poll } from '@/data/mockData'
export default function PollHero({ item }: { item: Poll }) {
return (
<section className="card">
<h1 className="title text-2xl">{item.question}</h1>
<ul className="mt-2 grid grid-cols-2 gap-2">
{item.options.map(o => (
<li key={o} className="cta text-center">{o}</li>
))}
</ul>
</section>
)
}