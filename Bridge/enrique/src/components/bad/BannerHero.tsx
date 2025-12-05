import { Banner } from '@/data/mockData'
export default function BannerHero({ item }: { item: Banner }) {
return (
<section className="card">
<img src={item.image} alt={item.alt} className="media md:h-72" />
<a className="cta mt-3">{item.cta}</a>
</section>
)
}