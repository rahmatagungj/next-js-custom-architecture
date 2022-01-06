import Payload from 'src/Infrastructure/Payload/Payload'

export default class HelloApiSpecification {
  /**
   *
   * @param {*} status
   * @param {*} data
   */
  constructor(data) {
    this.data = data
  }

  run() {
    const payload = new Payload(200, this.data)

    return payload
  }
}
