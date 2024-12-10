import React from 'react'

export default function Loader() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-20 h-10 overflow-hidden" style={{
        background: 'radial-gradient(circle 25px at top right, #ffd738 40%, transparent 100%)'
      }}>
        <div className="absolute top-1 left-[-10rem] w-9 h-5"
          style={{
            content: '""',
            background: `var(--c) 100% 100% /30% 60%, var(--c) 70% 0 /50% 100%, var(--c) 0 100% /36% 68%, var(--c) 27% 18% /26% 40%, linear-gradient(#fff 0 0) bottom/67% 58%`,
            backgroundRepeat: 'no-repeat',
            animation: 'l10 2s linear infinite',
            '--c': 'radial-gradient(farthest-side, #fff 96%, transparent)'
          }}
        />
        <div className="absolute top-4 left-[-10rem] w-9 h-5"
          style={{
            content: '""',
            background: `var(--c) 100% 100% /30% 60%, var(--c) 70% 0 /50% 100%, var(--c) 0 100% /36% 68%, var(--c) 27% 18% /26% 40%, linear-gradient(#fff 0 0) bottom/67% 58%`,
            backgroundRepeat: 'no-repeat',
            animation: 'l10 2s linear infinite',
            '--c': 'radial-gradient(farthest-side, #fff 96%, transparent)',
            '--l': '200%'
          }}
        />
      </div>
    </div>
  )
}
