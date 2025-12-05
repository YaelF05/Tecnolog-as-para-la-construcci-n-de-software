import { Poll } from '@/data/mockData'
export default function PollCard({ item }: { item: Poll }) {
return (
<article className="card">
<h3 className="title">{item.question}</h3>
<ul className="mt-2 grid grid-cols-2 gap-2">
{item.options.map(o => (
<li key={o} className="border rounded px-2 py-1 text-center">{o}</li>
))}
</ul>
</article>
)
}