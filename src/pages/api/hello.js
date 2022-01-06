// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import HelloApiSpecification from "src/UseCases/UseCase/api/HelloApiSpecification"
import ApiResponse from '@/Response/ApiResponse'

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export default function handler(req, res) {
  
  const payload =  new HelloApiSpecification({ greeting: 'Hello' }).run()
  
  const response = new ApiResponse(req, res, payload.status, payload.data)

  response.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')

  return response.json()
}