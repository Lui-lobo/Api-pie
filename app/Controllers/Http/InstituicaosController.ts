import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Instituicao from 'App/Models/Instituicao';

export default class InstituicaosController {

    public async handle({request, response, auth}: HttpContextContract) {
        
        if(auth.isLoggedIn) {
            const body = request.body()

            const user = auth.user?.id;

            console.log(user)
            
            const instituicao = await Instituicao.create({ user_id: auth.user?.id, ...body })
            response.status(201)

            return {
                message: "Instituição Inserida com sucesso",
                data: instituicao
            }
        }

    }

   
    
}
