import { useRoutes } from 'react-router-dom'

import generatedRoutes from '~react-pages'

const AppRoutes = () => {
  return useRoutes(generatedRoutes)
}

export default AppRoutes
