import { useState } from 'react'
import { homepageData, Item } from '@/data/mockData'
import { Article, Video, Poll, Banner } from '@/data/mockData'

// BAD imports
import ArticleHero from '@/components/bad/ArticleHero'
import ArticleFeatured from '@/components/bad/ArticleFeatured'
import ArticleCard from '@/components/bad/ArticleCard'
import ArticleListItem from '@/components/bad/ArticleListItem'
import VideoHero from '@/components/bad/VideoHero'
import VideoFeatured from '@/components/bad/VideoFeatured'
import VideoCard from '@/components/bad/VideoCard'
import VideoListItem from '@/components/bad/VideoListItem'
import PollHero from '@/components/bad/PollHero'
import PollFeatured from '@/components/bad/PollFeatured'
import PollCard from '@/components/bad/PollCard'
import PollListItem from '@/components/bad/PollListItem'
import BannerHero from '@/components/bad/BannerHero'
import BannerFeatured from '@/components/bad/BannerFeatured'
import BannerCard from '@/components/bad/BannerCard'
import BannerListItem from '@/components/bad/BannerListItem'

// BRIDGE imports
import LayoutHero from '@/components/bridge/abstractions/LayoutHero'
import LayoutFeatured from '@/components/bridge/abstractions/LayoutFeatured'
import LayoutCard from '@/components/bridge/abstractions/LayoutCard'
import LayoutListItem from '@/components/bridge/abstractions/LayoutListItem'
import AdBannerContent from '@/components/bridge/implementers/AdBannerContent'
import ArticleContent from '@/components/bridge/implementers/ArticleContent'
import VideoContent from '@/components/bridge/implementers/VideoContent'
import PollContent from '@/components/bridge/implementers/PollContent'

// --- Helpers for BAD example --- //
function renderBad(item: Item) {
  switch (item.kind) {
    case 'article': {
      const a = item as Article
      if (a.layout === 'hero') return <ArticleHero item={a} />
      if (a.layout === 'featured') return <ArticleFeatured item={a} />
      if (a.layout === 'card') return <ArticleCard item={a} />
      return <ArticleListItem item={a} />
    }
    case 'video': {
      const v = item as Video
      if (v.layout === 'hero') return <VideoHero item={v} />
      if (v.layout === 'featured') return <VideoFeatured item={v} />
      if (v.layout === 'card') return <VideoCard item={v} />
      return <VideoListItem item={v} />
    }
    case 'poll': {
      const p = item as Poll
      if (p.layout === 'hero') return <PollHero item={p} />
      if (p.layout === 'featured') return <PollFeatured item={p} />
      if (p.layout === 'card') return <PollCard item={p} />
      return <PollListItem item={p} />
    }
    case 'banner': {
      const b = item as Banner
      if (b.layout === 'hero') return <BannerHero item={b} />
      if (b.layout === 'featured') return <BannerFeatured item={b} />
      if (b.layout === 'card') return <BannerCard item={b} />
      return <BannerListItem item={b} />
    }
  }
}

// --- Helpers for BRIDGE example --- //
function toRenderer(item: Item) {
  switch (item.kind) {
    case 'article':
      return new ArticleContent(item as Article)
    case 'video':
      return new VideoContent(item as Video)
    case 'poll':
      return new PollContent(item as Poll)
    case 'banner':
      return new AdBannerContent(item as Banner)
  }
}

function renderBridge(item: Item) {
  const r = toRenderer(item)
  switch (item.layout) {
    case 'hero':
      return <LayoutHero r={r} />
    case 'featured':
      return <LayoutFeatured r={r} />
    case 'card':
      return <LayoutCard r={r} />
    case 'list':
      return <LayoutListItem r={r} />
  }
}

export default function App() {
  const [mode, setMode] = useState<'bad' | 'bridge'>('bad')

  return (
    <div className="max-w-6xl mx-auto p-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Sports News – Bridge Pattern</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm">Modo:</span>
          <button
            className="px-3 py-1 rounded-full bg-gray-900 text-white text-sm"
            onClick={() => setMode(m => (m === 'bad' ? 'bridge' : 'bad'))}
            title="Alterna entre implementación acoplada y Bridge"
          >
            {mode === 'bad' ? 'Cambiar a Bridge' : 'Cambiar a Malo'}
          </button>
        </div>
      </header>

      <main className="grid gap-6">
        <div>
          <h2 className="font-semibold text-gray-700 mb-2">Hero</h2>
          {mode === 'bad'
            ? renderBad(homepageData.find(i => i.layout === 'hero')!)
            : renderBridge(homepageData.find(i => i.layout === 'hero')!)}
        </div>

        <div>
          <h2 className="font-semibold text-gray-700 mb-2">Featured</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {homepageData
              .filter(i => i.layout === 'featured')
              .map(item => (
                <div key={item.id}>
                  {mode === 'bad' ? renderBad(item) : renderBridge(item)}
                </div>
              ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-gray-700 mb-2">Cards</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {homepageData
              .filter(i => i.layout === 'card')
              .map(item => (
                <div key={item.id}>
                  {mode === 'bad' ? renderBad(item) : renderBridge(item)}
                </div>
              ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-gray-700 mb-2">Lista</h2>
          <ul className="card divide-y">
            {homepageData
              .filter(i => i.layout === 'list')
              .map(item => (
                <li key={item.id} className="py-3">
                  {mode === 'bad' ? renderBad(item) : renderBridge(item)}
                </li>
              ))}
          </ul>
        </div>
      </main>
    </div>
  )
}
