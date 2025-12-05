import { Video } from '@/data/mockData'
import { ContentRenderer } from './ContentRenderer'


export default class VideoContent implements ContentRenderer {
constructor(private item: Video) {}


renderMedia = () => (
<img src={this.item.thumbnail} alt={this.item.title} className="media" />
)


renderTitle = (variant: 'lg' | 'md' | 'sm') => {
const size = variant === 'lg' ? 'text-3xl' : variant === 'md' ? 'text-xl' : ''
return <h2 className={`title ${size}`}>{this.item.title}</h2>
}


renderMeta = () => <p className="meta">{this.item.duration}</p>


renderAction = () => <a className="cta mt-2">Ver</a>
}