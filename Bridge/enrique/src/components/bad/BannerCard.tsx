import { Banner } from '@/data/mockData'
export default function BannerCard({ item }: { item: Banner }) {
return (
<article className="card">
<img src={item.image} alt={item.alt} className="media" />
</article>
)
}