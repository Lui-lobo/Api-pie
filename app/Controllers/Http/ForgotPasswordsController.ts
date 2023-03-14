
import Mail from '@ioc:Adonis/Addons/Mail'

import UserModel from 'App/Models/UserModel'

export default class ForgotPasswordsController {

   async sendResetLinkEmail({request, session, response}) {
    const emailUser = request.only('login')

    console.log(emailUser)

        Mail.send((message) => {
            message
                .from('teste@example.com')
                .to('')
                .subject('Recover Pass')
                
        })
   }
   
}
