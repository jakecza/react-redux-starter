import { createSlice, nanoid } from '@reduxjs/toolkit'

// Popup types
export type PopupContent = {
  info: {
    content: string
  }
}
type PopupList = Array<{ key: string; show: boolean; content: PopupContent; removeAfterMs: number | null }>

// Modal options
export enum ApplicationModal {
  SIDEBAR,
  ACCOUNT,
}

export interface ApplicationState {
  isDarkMode: boolean
  readonly openModal: ApplicationModal | null
  readonly popupList: PopupList
}

const initialState: ApplicationState = {
  isDarkMode: window.localStorage.getItem('isDarkMode') === 'true',
  openModal: null,
  popupList: [],
}

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode
      window.localStorage.setItem('isDarkMode', state.isDarkMode.toString())
    },
    setOpenModal(state, action) {
      state.openModal = action.payload
    },
    addPopup(state, { payload: { content, key, removeAfterMs = 2500 } }) {
      state.popupList = (key ? state.popupList.filter((popup) => popup.key !== key) : state.popupList).concat([
        {
          key: key || nanoid(),
          show: true,
          content,
          removeAfterMs,
        },
      ])
    },
    removePopup(state, { payload: { key } }) {
      state.popupList.forEach((p) => {
        if (p.key === key) {
          p.show = false
        }
      })
    },
  },
})

export const { toggleDarkMode, setOpenModal, addPopup, removePopup } = applicationSlice.actions
export default applicationSlice.reducer
