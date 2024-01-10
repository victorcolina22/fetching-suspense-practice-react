import { useState, useEffect } from "react";

export function useFetch(url) {
  const [controller, setController] = useState(null)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    const abortController = new AbortController()
    setController(abortController)

    fetch(url, {signal: abortController.signal})
      .then((result) => result.json())
      .then((resp) => setData(resp))
      .catch((error) => {
        if(error.name === 'AbortError') return setError('Request cancelled')
        return setError(error)
      })
      .finally(() => setLoading(false))

    return () => abortController.abort()
  }, [url])

  const handleCancelRequest = () => {
    if(!controller) return
    controller.abort()
  }

  return {
    data,
    error,
    handleCancelRequest,
    loading,
  }
}