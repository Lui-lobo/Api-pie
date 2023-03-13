import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { validator } from '@ioc:Adonis/Core/Validator'
import Application from '@ioc:Adonis/Core/Application'
import Mail from '@ioc:Adonis/Addons/Mail'

const User = require('App/Models/UserModel')
const passwordReset = require('App/models/ForgotPassword')
const randomString = require('randomstring')

export default class ForgotPasswordsController {

    async store() {
        
    }

   async sendResetLinkEmail({request, session, response}) {
    const validation = await validator.validate(request.only('email'))

    if(validation.fails()) {
        session.withErrors(validation.messages()).flashAll()

        return response.redirect('back')
    } try {
        const user = await User.findBy('login', request.input('email'))

        await passwordReset.query().where('login', user.login).delete()

        const token = await passwordReset.create({
            login: user.login,
            token: randomString({ length: 40})
        })

        const mailData = {
            user: user.toJSON(),
            token
        }

        await Mail.send((message) => {
            message
                .from('wolfCorp@example.com')
                .to(user.login)
                .subject('Recuperação de senha')
                .htmlView('emails/recover', { name: `${user}` })
        })

        session.flash({
            notification: {
                type: 'sucess',
                message: 'A password reset link has been sent to your email'
            }
        })

        return response.redirect('back')

    } catch(error) {
        session.flash({
            notification: {
                type: 'danger',
                message: 'Usuário inexistente'
            }
        })
        return response.redirect('back')
    }

   }
   
}
