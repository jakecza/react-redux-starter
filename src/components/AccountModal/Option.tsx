import { Circle } from '@mui/icons-material'
import { Button, Grid, Stack, styled } from '@mui/material'
import { transparentize } from 'polished'
import React from 'react'

import { ExtLinkStyled } from '../LinkStyled'

const InfoCard = styled(Button)<{ active?: boolean }>(({ theme, active }) => ({
  backgroundColor: active ? transparentize(0.0, theme.palette.divider) : theme.palette.background.default,
  padding: '1rem',
  outline: 'none',
  border: '2px solid',
  borderRadius: '12px',
  width: '100% !important',
  alignItems: 'center',
  justifyContent: 'center',
  '&:focus': {
    boxShadow: `0 0 0 1px ${theme.palette.primary.dark}`,
  },
  borderColor: active ? theme.palette.divider : 'transparent',
}))

const OptionCard = styled(InfoCard as any)(({ theme }) => ({
  // display: 'flex',
  // flexDirection: 'row',
  // alignItems: 'center',
  // justifyContent: 'space-between',
}))

const OptionCardClickable = styled(OptionCard as any)<{ clickable?: boolean }>(({ theme }) => ({}))

const IconWrapper = styled('div')<{ size?: number | null }>(({ theme, size }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  '& > img': {
    height: size ? size + 'px' : '24px',
    width: size ? size + 'px' : '24px',
  },
}))

// const OptionCard = styled(InfoCard as any)`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   margin-top: 2rem;
//   padding: 1rem;
// `

// const OptionCardLeft = styled.div`
//   ${({ theme }) => theme.flexColumnNoWrap};
//   justify-content: center;
//   height: 100%;
// `

// const OptionCardClickable = styled(OptionCard as any)<{ clickable?: boolean }>`
//   margin-top: 0;
//   &:hover {
//     cursor: ${({ clickable }) => (clickable ? 'pointer' : '')};
//     border: ${({ clickable, theme }) => (clickable ? `1px solid ${theme.primary1}` : ``)};
//   }
//   opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
// `

// const GreenCircle = styled.div`
//   ${({ theme }) => theme.flexRowNoWrap}
//   justify-content: center;
//   align-items: center;

//   &:first-child {
//     height: 8px;
//     width: 8px;
//     margin-right: 8px;
//     background-color: ${({ theme }) => theme.green1};
//     border-radius: 50%;
//   }
// `

// const CircleWrapper = styled.div`
//   color: ${({ theme }) => theme.green1};
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// const HeaderText = styled.div`
//   ${({ theme }) => theme.flexRowNoWrap};
//   color: ${(props) => (props.color === 'blue' ? ({ theme }) => theme.primary1 : ({ theme }) => theme.text1)};
//   font-size: 1rem;
//   font-weight: 500;
// `

// const SubHeader = styled.div`
//   color: ${({ theme }) => theme.text1};
//   margin-top: 10px;
//   font-size: 12px;
// `

export default function Option({
  link = null,
  clickable = true,
  size,
  onClick = null,
  header,
  subheader = null,
  icon,
  active = false,
  id,
}: {
  link?: string | null
  clickable?: boolean
  size?: number | null
  onClick?: null | (() => void)
  header: React.ReactNode
  subheader: React.ReactNode | null
  icon: string
  active?: boolean
  id: string
}) {
  const content = (
    <Grid item>
      <OptionCardClickable id={id} onClick={onClick} clickable={clickable && !active} active={active}>
        <Stack
          direction="row"
          sx={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Stack direction="row" spacing={1}>
            <Stack direction="row" spacing={1}>
              {active ? <Circle /> : ''}
              {header}
            </Stack>
            {subheader}
          </Stack>
          <img src={icon} alt="icon" height={24} width={24} />
        </Stack>
      </OptionCardClickable>
    </Grid>
  )
  if (link) {
    return <ExtLinkStyled href={link}>{content}</ExtLinkStyled>
  }

  return content
}
