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
    this.status = status
    this.data = data
    this.response = res.status(this.status)
  }

  json() {
    return this.response.json(this.data)
  }

  setHeader(key, value) {
    this.response.setHeader(key, value)

    return this
  }
}