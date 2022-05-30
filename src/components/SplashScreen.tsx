import { keyframes } from '@emotion/react'
import { Box, SvgIcon } from '@mui/material'
import type { FC } from 'react'

const bounce1 = keyframes`
  0% {
    transform: translate3d(0, 0, 0)
  }
  50% {
    transform: translate3d(0, 1px, 0)
  }
  100% {
    transform: translate3d(0, 0, 0)
  }
`

const bounce3 = keyframes`
  0% {
    transform: translate3d(0, 0, 0)
  }
  50% {
    transform: translate3d(0, 3px, 0)
  }
  100% {
    transform: translate3d(0, 0, 0)
  }
`

export const SplashScreen: FC = () => (
  <Box
    sx={{
      alignItems: 'center',
      backgroundColor: 'neutral.900',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center',
      left: 0,
      p: 3,
      position: 'fixed',
      top: 0,
      width: '100vw',
      zIndex: 2000,
    }}
  >
    <SvgIcon
      sx={{
        height: 80,
        width: 80,
        '& path:nth-child(1)': {
          animation: `${bounce1} 1s ease-in-out infinite`,
        },
        '& path:nth-child(3)': {
          animation: `${bounce3} 1s ease-in-out infinite`,
        },
      }}
    >
      <svg viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27 14c0 8.062-7 12-11 12-4.031 0-11-3.938-11-12 0-5.523 4.925-7 11-7s11 1.477 11 7z"
          fill="#f8706000"
          className="fill-b83b5e"
        ></path>
        <path
          d="M18 24c-4.031 0-11-3.938-11-12 0-1.333.293-2.426.814-3.324C6.07 9.753 5 11.437 5 14c0 8.062 6.969 12 11 12 2.474 0 6.094-1.511 8.497-4.569C22.349 23.142 19.855 24 18 24z"
          fill="#d9625300"
          className="fill-8a2c47"
        ></path>
        <path
          d="M16 7c-4.19 0-7.832.704-9.689 2.953C8.165 9.261 10.48 9 13 9c6.075 0 11 1.477 11 7 0 3.989-1.715 6.964-3.931 8.957C23.522 23.307 27 19.683 27 14c0-5.523-4.925-7-11-7z"
          fill="#de5e4d00"
          className="fill-c6627e"
        ></path>
        <path
          d="M27 14c0 8.062-7 12-11 12-4.031 0-11-3.938-11-12 0-5.523 4.925-7 11-7s11 1.477 11 7z"
          fill="none"
          stroke="#f87060"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          className="stroke-200f60"
        ></path>
        <circle cx="11" cy="15" fill="#f87060" r="2" className="fill-f9ed69"></circle>
        <circle cx="21" cy="15" fill="#f87060" r="2" className="fill-f9ed69"></circle>
        <path
          fill="none"
          stroke="#f87060"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="m11 29-3-2 2.665-2.665M21 29l3-2-2.665-2.665M3 6c2.331-.41 4.637-1.316 7-3l3.105 4.132M29 6c-2.331-.41-4.637-1.316-7-3l-3.105 4.132"
          className="stroke-200f60"
        ></path>
      </svg>
    </SvgIcon>
  </Box>
)
