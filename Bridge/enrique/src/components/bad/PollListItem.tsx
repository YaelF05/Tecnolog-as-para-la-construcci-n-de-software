import { Poll } from '@/data/mockData'
export default function PollListItem({ item }: { item: Poll }) {
return (
<li className="flex items-center gap-3">
<span className="cta">Vota</span>
<p className="title">{item.question}</p>
</li>
)
}