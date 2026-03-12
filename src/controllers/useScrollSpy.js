import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds, offset = 80) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    function onScroll() {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200

      if (atBottom) {
        setActiveId(sectionIds[sectionIds.length - 1])
        return
      }

      const scrollPos = window.scrollY + offset + 1
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          current = id
        }
      }
      setActiveId(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds, offset])

  return activeId
}
