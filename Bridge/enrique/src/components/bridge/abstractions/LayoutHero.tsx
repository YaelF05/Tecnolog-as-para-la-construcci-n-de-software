import { ContentRenderer } from '../implementers/ContentRenderer'


export default function LayoutHero({ r }: { r: ContentRenderer }) {
return (
    <section className="card grid md:grid-cols-2 gap-4">
        {r.renderMedia?.()}
        <div className="flex flex-col justify-center">
            {r.renderTitle('lg')}
            {r.renderMeta?.()}
            {r.renderAction?.()}
        </div>
    </section>
)
}