'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { XIcon } from 'lucide-react'

interface ImageModalProps {
  src: string
  alt: string
  caption?: string
}

export function ImageModal({ src, alt, caption }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <figure 
        className="cursor-zoom-in"
        onClick={() => setIsOpen(true)}
      >
        <img src={src} alt={alt} className="rounded-xl" />
        {caption && (
          <figcaption className="text-center">{caption}</figcaption>
        )}
      </figure>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-h-[100vh] max-w-[100vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={src}
                alt={alt}
                className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="fixed right-4 top-[16px] rounded-full bg-white/90 p-2 text-gray-600 hover:bg-white hover:text-gray-800"
                style={{ right: '16px' }}
              >
                <XIcon className="h-3 w-3" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
