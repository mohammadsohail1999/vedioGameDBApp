// const useData = <T>(
//     path: string,
//     requestConfig?: AxiosRequestConfig,
//     deps?: unknown[]
// ) => {
//     const [data, setData] = useState<Array<T>>([])
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState('')

//     useEffect(
//         () => {
//             setLoading(true)
//             client
//                 .get<DataResponse<T>>(path, {
//                     ...requestConfig,
//                 })
//                 .then(({ data }) => {
//                     setData(data?.results)
//                     setLoading(false)
//                 })
//                 .catch(() => {
//                     setError('Something went wrong.')
//                     setLoading(false)
//                 })
//         },
//         deps ? [path, ...deps] : [path]
//     )

//     return { data, loading, error }
// }
