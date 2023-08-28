import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorRoute() {
  const error = useRouteError();
  console.log(error);
  return (
    <p>Page not found... 404 and stuff</p>
  )
}

export default ErrorRoute