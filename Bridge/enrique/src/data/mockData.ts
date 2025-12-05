export type ContentKind = 'article' | 'video' | 'poll' | 'banner'
export type LayoutKind = 'hero' | 'featured' | 'card' | 'list'


export interface BaseItem {
id: string
kind: ContentKind
layout: LayoutKind
}


export interface Article extends BaseItem {
kind: 'article'
title: string
image: string
excerpt: string
author: string
}


export interface Video extends BaseItem {
kind: 'video'
title: string
thumbnail: string
duration: string
}


export interface Poll extends BaseItem {
kind: 'poll'
question: string
options: string[]
}


export interface Banner extends BaseItem {
kind: 'banner'
image: string
alt: string
cta: string
}


export type Item = Article | Video | Poll | Banner


export const homepageData: Item[] = [
{
id: 'a1',
kind: 'article',
layout: 'hero',
title: 'Clásico: dramático 3-2 en tiempo agregado',
image: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1200&auto=format&fit=crop',
excerpt: 'Un cierre de locura con polémica arbitral y VAR decisivo.',
author: 'Redacción EA'
},
{
id: 'v1',
kind: 'video',
layout: 'featured',
title: 'Resumen: semifinales de copa',
thumbnail: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop',
duration: '06:42'
},
{
id: 'p1',
kind: 'poll',
layout: 'card',
question: '¿Quién será campeón?',
options: ['Azules', 'Rojos', 'Verdes']
},
{id: 'b1',
kind: 'banner',
layout: 'featured',
image: 'https://images.unsplash.com/photo-1521417531773-6202593744a3?q=80&w=1200&auto=format&fit=crop',
alt: 'Botines Pro 2025',
cta: 'Compra ahora'
},
{
id: 'a2',
kind: 'article',
layout: 'card',
title: 'La joya del draft sorprende en su debut',
image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1200&auto=format&fit=crop',
excerpt: 'Anotó y asistió en los primeros 15 minutos.',
author: 'M. Ortega'
},
{
id: 'v2',
kind: 'video',
layout: 'card',
title: 'Entrevista con la figura del partido',
thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop',
duration: '04:10'
},
{
id: 'a3',
kind: 'article',
layout: 'list',
title: 'Mercado: últimos rumores y traspasos',
image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop',
excerpt: 'Varios equipos mueven fichas antes del cierre.',
author: 'C. Vega'
},
{
id: 'b2',
kind: 'banner',
layout: 'list',
image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop',
alt: 'Suscríbete y gana',
cta: 'Suscríbete'
}
]