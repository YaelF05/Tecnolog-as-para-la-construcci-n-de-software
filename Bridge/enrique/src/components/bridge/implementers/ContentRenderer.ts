// ✅ BRIDGE: Implementer interface

export interface ContentRenderer {
// A media block (image/thumbnail/banner). Optional for Polls.
renderMedia?: () => JSX.Element | null
// A main title/headline or question.
renderTitle: (variant: 'lg' | 'md' | 'sm') => JSX.Element
// A short meta/secondary line (author, duration...). Optional.
renderMeta?: () => JSX.Element | null
// An optional action (e.g., CTA button)
renderAction?: () => JSX.Element | null
}