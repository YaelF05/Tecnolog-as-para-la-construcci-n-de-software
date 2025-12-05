import { Banner } from '@/data/mockData'
import { ContentRenderer } from './ContentRenderer'


export default class AdBannerContent implements ContentRenderer {
constructor(private item: Banner) {}


renderMedia = () => (
<img src={this.item.image} alt={this.item.alt} className="media" />
)


renderTitle = () => <h2 className="sr-only">{this.item.alt}</h2>


renderMeta = () => null


renderAction = () => <a className="cta mt-2">{this.item.cta}</a>
}