
import Mail from '@ioc:Adonis/Addons/Mail'

import UserModel from 'App/Models/UserModel'
const user = new UserModel()


export default class ForgotPasswordsController {

    
   async sendResetLinkEmail({request, session, response}) {
    const emailUser = await request.input('login')
    console.log(emailUser)

        if(emailUser == null || emailUser == "" || emailUser === "" || emailUser == undefined) {
            console.log('deu ruim')
        } else {
            console.log('e um email')

            const User = await UserModel.findBy('login', emailUser)

            console.log(User?.Login)

            if(User?.Login == undefined || User?.Login == null) {
                console.log('o usuario não encontrado no sistema')
            } else if (User?.Login === emailUser) {
                console.log('o usuario existe, email de recuperação enviado')

                Mail.send((message) => {
                message
                    .from('teste@example.com')
                    .to('')
                    .subject('Recover Pass')
                    .htmlView('emails/recover', { name: 'Luiz' })
                })

            } else {
                console.log('o usuario não existe')
            }
        }

        }
    }
   

