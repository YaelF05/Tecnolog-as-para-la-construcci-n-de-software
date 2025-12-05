import { Banner } from '@/data/mockData'
export default function BannerFeatured({ item }: { item: Banner }) {
return (
<article className="card flex flex-col items-start">
<img src={item.image} alt={item.alt} className="media" />
<a className="cta mt-2">{item.cta}</a>
</article>
)
}