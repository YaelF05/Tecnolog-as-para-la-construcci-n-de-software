import { Poll } from '@/data/mockData'
import { ContentRenderer } from './ContentRenderer'


export default class PollContent implements ContentRenderer {
constructor(private item: Poll) {}


renderMedia = () => null


renderTitle = (variant: 'lg' | 'md' | 'sm') => {
const size = variant === 'lg' ? 'text-2xl' : variant === 'md' ? 'text-xl' : ''
return <h2 className={`title ${size}`}>{this.item.question}</h2>
}


renderMeta = () => null


renderAction = () => (
<div className="mt-2 grid grid-cols-2 gap-2">
{this.item.options.map(o => (
<button key={o} className="border rounded-full px-3 py-1 text-sm">{o}</button>
))}
</div>
)
}