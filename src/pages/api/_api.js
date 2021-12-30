import ApiSpesification from '@/UseCase/api/_ApiSpesification'

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export default function handler(req, res) {
  return new ApiSpesification(req, res, 200, { greeting: 'Hello' }).run()
}
