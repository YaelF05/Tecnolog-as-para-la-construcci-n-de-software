import { Poll } from '@/data/mockData'
export default function PollFeatured({ item }: { item: Poll }) {
return (
<article className="card">
<h2 className="title text-xl">{item.question}</h2>
<ul className="mt-2 grid grid-cols-2 gap-2">
{item.options.map(o => (
<li key={o} className="border rounded-full px-3 py-1 text-center">{o}</li>
))}
</ul>
</article>
)
}