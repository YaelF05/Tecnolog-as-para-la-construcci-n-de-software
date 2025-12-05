import { ContentRenderer } from '../implementers/ContentRenderer'


export default function LayoutListItem({ r }: { r: ContentRenderer }) {
return (
    <li className="flex items-center gap-3">
        {/* Many contents have no media in list form; we can choose to omit */}
        {r.renderMedia?.() && (
        <div className="w-20 h-14 overflow-hidden rounded-lg">
            {/* re-render but constrained visually */}
            <div className="-mt-16">{r.renderMedia?.()}</div>
        </div>
        )}
        <div>
            {r.renderTitle('sm')}
            {r.renderMeta?.()}
        </div>
    </li>
)}