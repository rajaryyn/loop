'use client'

import React from 'react'
import { Provider } from 'react-redux'
import Store from './app/Store'

export default function ReduxProvider({children}) {
  return <Provider store={Store}>{children}</Provider>
}
