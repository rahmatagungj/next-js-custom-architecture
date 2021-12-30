export default class ApiResponse {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} status
   * @param {*} data
   */
  constructor(req, res, status, data) {
    this.req = req
    this.res = res
    this.status = status
    this.data = data
    this.response = res.status(status)
  }

  json() {
    return this.response.json(this.data)
  }
}