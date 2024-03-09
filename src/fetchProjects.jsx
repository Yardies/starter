import { createClient } from 'contentful'
import { useEffect, useState } from 'react'

const client = createClient({
  space: 'b5s9fszhqztn',
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_CONTENTFUL_KEY,
})

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])
  const getData = async () => {
    try {
      const fetcher = await client.getEntries({ content_type: 'projects' })
      const projects = fetcher.items.map((item) => {
        const { title, url, image } = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return { title, url, id, img }
      })
      setProjects(projects)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { projects, loading }
}
