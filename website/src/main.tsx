// main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'

import Master from './views/Master'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Master />
  </React.StrictMode>,
)