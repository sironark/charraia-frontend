async function SendMessage(item, description, cell, name){
const GZAPPY_URL = "https://api.gzappy.com/v1/message/send-message"

const response = await fetch(GZAPPY_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'user_token_id': 'c70ad32f-4d67-4586-86d4-773ed33a2cac'
  },
  body: JSON.stringify({
    instance_id: 'QAYQCSKVKRNR00XMSASQE5MO',
    instance_token: '5ed61b9282cea5b04f63014270c7c21a769617ed62351e0687833f141d07ec61f54539149a3314550d61633b05487027e9453a74729d2a6e2b727351a5059896',
    message: [`Pode deixar que anotei aqui o presente! Obrigado ${name}. Se tiver qualquer dúvida é só mandar mensagem. \n\n- ${item}: ${description}`],
    phone: [`55${cell}`],
    mediaUrl: "https://uploaddeimagens.com.br/images/004/726/327/full/anuncio_GZAPPY_IMAGENS.jpg?1706576404"
  })
})

const data = await response.json()

console.log(data, cell)
// { msg: 'Messages sent' }
}

export const whatsapp = {
    SendMessage,
}