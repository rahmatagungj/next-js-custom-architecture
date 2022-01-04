import ApiSpecification from '@/UseCase/api/_ApiSpecification'

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export default function handler(req, res) {
  return new ApiSpecification(req, res, 200, { greeting: 'Hello' }).run()
}
