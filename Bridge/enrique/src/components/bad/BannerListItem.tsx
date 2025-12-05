import { Banner } from '@/data/mockData'
export default function BannerListItem({ item }: { item: Banner }) {
return (
<li className="flex items-center gap-3">
<img src={item.image} alt={item.alt} className="w-20 h-14 object-cover rounded-lg" />
<a className="cta">{item.cta}</a>
</li>
)
}