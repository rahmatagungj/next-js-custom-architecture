import Payload from '@/Payload/Payload'
import ApiResponse from '@/Response/ApiResponse'

export default class HelloApiSpesification {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} payload
   */
  constructor(req, res, status, data) {
    this.req = req
    this.res = res
    this.status = status
    this.data = data
  }

  run() {
    const payload = new Payload(this.status, this.data)

    this.res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')

    return new ApiResponse(this.req, this.res, payload.status, payload.data).json()
  }
}
