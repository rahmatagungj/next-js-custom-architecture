import { Exception } from '@/Infrastructure/Exception' 

export default class Payload {
  
  /**
   * 
   * @param {Number} status of the response, ex: 200, 301, 404, 500
   * @param {*} data 
   * @returns 
   */
  constructor (status, data) {
    this.status = status
    this.data = data

    if (this.data instanceof Error || !this.data) {
      this.status = 500
      this.data = Exception['DATA_NOT_FOUND']
    }

    return this
  }
}