import axios from 'axios';
export default async function handler(req, res) {
  if(req.method!=='POST') return res.status(405).end();
  try {
    const r = await axios.post('https://api.ironpayapp.com.br/v1/pix', req.body, {
      headers:{Authorization:`Bearer ${process.env.IRONPAY_TOKEN}`}
    });
    res.json(r.data);
  } catch(e){
    res.status(500).json({error:'erro pix'});
  }
}