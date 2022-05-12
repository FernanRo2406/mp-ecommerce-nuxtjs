import { useQuery } from 'h3'

export default async (req, res) => {
  const { code } = useQuery(req)
  console.log(code)
}