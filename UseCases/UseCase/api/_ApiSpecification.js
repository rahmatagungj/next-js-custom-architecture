import ApiResponse from '@/Infrastructure/Response/ApiResponse'

export default class ApiSpecification extends ApiResponse {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} status
   * @param {*} data
   */
  constructor(req, res, status, data) {
    super(req, res, status, data)
  }

  run() {
    this.res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')

    return this.json()
  }
}
