// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import HelloApiSpecification from "@/UseCase/api/HelloApiSpecification"

export default function handler(req, res) {
  return new HelloApiSpecification(req, res, 200, { greeting: 'Hello' }).run()
}
