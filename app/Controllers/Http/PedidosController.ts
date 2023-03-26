 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import Pedido from 'App/Models/Pedido'

export default class PedidosController {

    public async store({request, response, auth}: HttpContextContract) {
        const body = request.body()

        const user = auth.user?.id;

            console.log(user)
            
            const pedido = await Pedido.create({ user_id: auth.user?.id, ...body })
            response.status(201)

            return {
                message: "Instituição Inserida com sucesso",
                data: pedido
            }


    }

}
