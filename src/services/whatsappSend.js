async function SendMessage(item, description, cell, name){
const GZAPPY_URL = "https://api.gzappy.com/v1/message/send-message"

const response = await fetch(GZAPPY_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'user_token_id': 'c70ad32f-4d67-4586-86d4-773ed33a2cac'
  },
  body: JSON.stringify({
    instance_id: 'RLJV1MCXSFOGK9K7NEQ03KKH',
    instance_token: 'f79bd023-dc65-444c-ba09-fbab274b6570',
    message: [`Pode deixar que anotei aqui o presente! Obrigado ${name}. Se tiver qualquer dúvida é só mandar mensagem.`, `- ${item}: ${description}`],
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