// OTRA FORMA DE HACERLO.
// function getSuspender(promise) {
//   let status = 'pending',
//     response

//   const suspender = promise
//     .then((res) => {
//     status = 'success',
//     response = res
//     })
//     .catch((error) => {
//     status = 'error'
//     response = error
//     })

//   const read = () => {
//     switch (status) {
//       case 'pending':
//         throw suspender
//       case 'error':
//         throw response
//       default:
//         return response
//     }
//   }

//   return {
//     read
//   }
// }

// export function fetchData(url) {
//   const promise = fetch(url)
//     .then((response) =>response.json())
//     .then((data) => data)
//   return getSuspender(promise)
// }

export async function fetchData(url) {
  const response = await fetch(url).then((resp) => resp.json())
  const result = await response
  return result
}