// os "console.log()" nos arquivos de api aparecem no terminal em que tá rodando a aplicação

import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';

export default async function (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {name, email, message} = req.body
  console.log('entrou na rota')
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'emailPraTeste@gmail.com',
      // pra essa senha tu vai ter que usar a verificação em duas etapas
      // e depois criar uma "app password" a partir disso: https://support.google.com/accounts/answer/185833?visit_id=638196313573713785-3699289791&p=InvalidSecondFactor&rd=1
      pass: 'senhaGeradaNoComentarioAcima',
    },
  });
  
  const mailData = {
    from: 'emailteste', // não entendi pra que é o from
    to: email,
    subject: 'subject message',
    text: 'subject text'
  }

  try {
    await transporter.sendMail(mailData)
    res.status(200).json('res success')
  } catch (error) {
    console.log(error)
    res.status(400).json('res error')
  }
}
