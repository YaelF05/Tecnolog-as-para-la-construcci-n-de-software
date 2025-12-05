import { ContentRenderer } from '../implementers/ContentRenderer'


export default function LayoutFeatured({ r }: { r: ContentRenderer }) {
return (
    <article className="card">
        {r.renderMedia?.()}
        <div className="mt-2">
            {r.renderTitle('md')}
            {r.renderMeta?.()}
            {r.renderAction?.()}
        </div>
    </article>
)
}