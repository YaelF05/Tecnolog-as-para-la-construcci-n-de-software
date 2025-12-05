import { Article } from '@/data/mockData'
import { ContentRenderer } from './ContentRenderer'


export default class ArticleContent implements ContentRenderer {
constructor(private item: Article) {}


renderMedia = () => (
    <img src={this.item.image} alt={this.item.title} className="media" />
)


renderTitle = (variant: 'lg' | 'md' | 'sm') => {
    const base = 'title'
    const size = variant === 'lg' ? 'text-3xl' : variant === 'md' ? 'text-xl' : ''
    return <h2 className={`${base} ${size}`}>{this.item.title}</h2>
}


renderMeta = () => <p className="meta">Por {this.item.author}</p>


renderAction = () => <a className="cta mt-2">Leer</a>
}