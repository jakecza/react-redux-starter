import PropTypes from 'prop-types'
import type { FC, ReactNode } from 'react'
import { createContext, useEffect, useState } from 'react'

interface Settings {
  responsiveFontSizes?: boolean
  theme: 'light' | 'dark'
}

export interface SettingsContextValue {
  settings: Settings
  saveSettings: (update: Settings) => void
}

interface SettingsProviderProps {
  children?: ReactNode
}

const initialSettings: Settings = {
  responsiveFontSizes: true,
  theme: 'dark',
}

export const restoreSettings = (): Settings | null => {
  let settings = null

  try {
    const storedData: string | null = window.localStorage.getItem('settings')

    if (storedData) {
      settings = JSON.parse(storedData)
    } else {
      settings = {
        responsiveFontSizes: true,
        theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
      }
    }
  } catch (err) {
    console.error(err)
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
  }

  return settings
}

export const storeSettings = (settings: Settings): void => {
  window.localStorage.setItem('settings', JSON.stringify(settings))
}

export const SettingsContext = createContext<SettingsContextValue>({
  settings: initialSettings,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  saveSettings: () => {},
})

export const SettingsProvider: FC<SettingsProviderProps> = (props) => {
  const { children } = props
  const [settings, setSettings] = useState<Settings>(initialSettings)

  useEffect(() => {
    const restoredSettings = restoreSettings()

    if (restoredSettings) {
      setSettings(restoredSettings)
    }
  }, [])

  const saveSettings = (updatedSettings: Settings): void => {
    setSettings(updatedSettings)
    storeSettings(updatedSettings)
  }

  return (
    <SettingsContext.Provider
      value={{
        settings,
        saveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const SettingsConsumer = SettingsContext.Consumer