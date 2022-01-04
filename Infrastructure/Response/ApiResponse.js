import Payload from '@/Infrastructure/Payload/Payload'

export default class ApiResponse {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} status
   * @param {*} data
   */
  constructor(req, res, status, data) {
    this.res = res
    this.req = req
    this.status = status
    this.data = data

    this.make()
  }

  make() {
    const payload = new Payload(this.status, this.data)
    this.data = payload.data
    this.status = payload.status
    this.response = this.res.status(this.status)
  }

  json() {
    return this.response.json(this.data)
  }
}