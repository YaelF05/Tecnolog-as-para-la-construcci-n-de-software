import { ContentRenderer } from '../implementers/ContentRenderer'


export default function LayoutCard({ r }: { r: ContentRenderer }) {
return (
    <article className="card">
        {r.renderMedia?.()}
        <div className="mt-2">
            {r.renderTitle('sm')}
            {r.renderMeta?.()}
        </div>
        {r.renderAction?.()}
    </article>
)
}