
import Mail from '@ioc:Adonis/Addons/Mail'

import UserModel from 'App/Models/UserModel'

const randomString = require('randomstring')
const user = new UserModel()


export default class ForgotPasswordsController {

    
   async sendResetLinkEmail({request, response}) {
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
                response.unauthorized('email inexistente')
                return { 
                    message: 'email inexistente',
                    status: response.status
                }
            } else if (User?.Login === emailUser) {
                console.log('o usuario existe, email de recuperação enviado')

                const Token  =  await {
                    email: User?.Login,
                    token: randomString.generate() 
                }

                Mail.send((message) => {
                message
                    .from('teste@example.com')
                    .to(emailUser)
                    .subject('Recover Pass')
                    .htmlView('emails/recover', { name: User.Login, url: `http://localhost:4200/auth/recoverPassEmail?UserLogin=${User?.Login}&Token=${randomString.generate()}`})
                })

                if(!(User?.Login, emailUser)) {
                    response.unauthorized('email invalido')
                    return {
                        message: 'email invalido',
                        status: response.status
                    }
                }

                return {
                    message: 'email enviado com sucesso',
                    data: request,
                    status: response.status
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
   

