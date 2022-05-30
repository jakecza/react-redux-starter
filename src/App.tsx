/* eslint-disable no-restricted-imports */
import 'simplebar/dist/simplebar.min.css'

import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import { SettingsConsumer, SettingsProvider } from 'contexts/SettingsContext'
import React from 'react'
import AppRoutes from 'routes'
import { useAppSelector } from 'state/hooks'
import { createTheme } from 'theme'

const App: React.FC = (): JSX.Element => {
  const darkMode = useAppSelector((state) => state.application.isDarkMode)

  return (
    <SettingsProvider>
      <SettingsConsumer>
        {({ settings }) => (
          <StyledEngineProvider injectFirst>
            <ThemeProvider
              theme={createTheme({
                direction: 'ltr',
                responsiveFontSizes: true,
                isDarkMode: darkMode,
              })}
            >
              <CssBaseline />
              <AppRoutes />
            </ThemeProvider>
          </StyledEngineProvider>
        )}
      </SettingsConsumer>
    </SettingsProvider>
  )
}

export default App
