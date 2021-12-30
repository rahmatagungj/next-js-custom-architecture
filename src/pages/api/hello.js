// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import HelloApiSpesification from "@/UseCase/api/HelloApiSpesification"

export default function handler(req, res) {
  return new HelloApiSpesification(req, res, 200, { greeting: 'Hello' }).run()
}
