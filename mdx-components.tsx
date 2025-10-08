import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'
import { ImpactMetrics } from '@/components/ui/impact-metrics'
import { ImageModal } from '@/components/ui/image-modal'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ImpactMetrics,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return <ImageModal src={src} alt={alt} caption={caption} />
    },
    img: ({ src, alt, ...props }: ComponentPropsWithoutRef<'img'>) => {
      return <ImageModal src={src || ''} alt={alt || ''} />
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
  }
}
