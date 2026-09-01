'use client'

export default function ScrollTopButton() {
  return (
    <button
      type='button'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className='text-sm font-bold tracking-tight'
    >
      [ A_K ]
    </button>
  )
}
