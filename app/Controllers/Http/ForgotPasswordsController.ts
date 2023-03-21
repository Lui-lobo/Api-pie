
import Mail from '@ioc:Adonis/Addons/Mail'

import UserModel from 'App/Models/UserModel'
const user = new UserModel()


export default class ForgotPasswordsController {

    
   async sendResetLinkEmail({request, session, response}) {
    const emailUser = await request.input('email')
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
                    .to(emailUser)
                    .subject('Recover Pass')
                    .htmlView('emails/recover', { name: User.Login, url: 'https://your-app.com/verification-url' })
                })

                return {
                    message: 'email enviado com sucesso',
                    data: request
                }

            } else {
                console.log('o usuario não existe')

                return {
                    message: 'email não enviado com sucesso',
                    data: request
                }
            }
        }

        }
    }
   

