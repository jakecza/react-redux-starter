import { useCallback, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from 'state/hooks'

import { AppState } from '..'
import { addPopup, ApplicationModal, PopupContent, removePopup, setOpenModal, toggleDarkMode } from './reducer'

export function useIsDarkMode(): boolean {
  const darkMode = useAppSelector((state: AppState) => state.application.isDarkMode)
  return darkMode
}

export function useToggleDarkMode() {
  const dispatch = useAppDispatch()

  return useCallback(() => dispatch(toggleDarkMode()), [dispatch])
}

export function useModalOpen(modal: ApplicationModal): boolean {
  const openModal = useAppSelector((state: AppState) => state.application.openModal)
  return openModal === modal
}

export function useToggleModal(modal: ApplicationModal): () => void {
  const open = useModalOpen(modal)
  const dispatch = useAppDispatch()
  return useCallback(() => dispatch(setOpenModal(open ? null : modal)), [dispatch, modal, open])
}

export function useAccountModalToggle(): () => void {
  console.log('toggled account modal')
  return useToggleModal(ApplicationModal.ACCOUNT)
}

export function useSidebarDrawerToggle(): () => void {
  return useToggleModal(ApplicationModal.SIDEBAR)
}

// returns a function that allows adding a popup
export function useAddPopup(): (content: PopupContent, key?: string, removeAfterMs?: number) => void {
  const dispatch = useAppDispatch()

  return useCallback(
    (content: PopupContent, key?: string, removeAfterMs?: number) => {
      dispatch(addPopup({ content, key, removeAfterMs: removeAfterMs ?? 2500 }))
    },
    [dispatch]
  )
}

// returns a function that allows removing a popup via its key
export function useRemovePopup(): (key: string) => void {
  const dispatch = useAppDispatch()
  return useCallback(
    (key: string) => {
      dispatch(removePopup({ key }))
    },
    [dispatch]
  )
}

// get the list of active popups
export function useActivePopups(): AppState['application']['popupList'] {
  const list = useAppSelector((state: AppState) => state.application.popupList)
  return useMemo(() => list.filter((item: { show: boolean }) => item.show), [list])
}
