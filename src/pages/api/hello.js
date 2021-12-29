// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Payload from "@/Payload/Payload"

export default function handler(req, res) {

  const payload = new Payload(200, { name: 'John Doe' })

  res.status(payload.status).json(payload.data)
}
