import mailjet from 'node-mailjet';


export default async (req: any, res: any) => {
  console.log(req.body)
  console.log('req')
  const body = JSON.parse(req.body)
  return new Promise((resolve, reject) => {
    mailjet.connect('8cc7bd8fcbbd987e10f55da84bd61ec8', '33094bfbe526ee08142648085ac59c29')
      .post("send", {'version': 'v3.1'})
      .request({
        "Messages":[
          {
            "From": {
              "Email": body.email,
              "Name": body.name
            },
            "To": [
              {
                "Email": "anantojha10@gmail.com",
                "Name": "Anant"
              }
            ],
            "Subject": "** Mail from Personal Website **",
            "TextPart": "Message: " + body.message,
            "HTMLPart": "",
            "CustomID": "ProdGettingMail"
          }
        ]
      })
      .then((result) => {
        console.log(result.body)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'max-age=180000');
        res.end(JSON.stringify(result.body));
        resolve(0);
      })
      .catch((err) => {
        console.log(err.statusCode)
        res.json(err);
        res.status(405).end();
        resolve(0); // in case something goes wrong in the catch block (as vijay commented)
      })
    })
}

