import Cupon from "../dto/CuponProveedorDTO.js";

class RepositorioCuponProveedor {

    async buscarCuponPorNombreYProveedor(nombre, proveedor_id){
        const cupon = await Cupon.findOne({where: {nombre: nombre, proveedor_id: proveedor_id}})
        if(!cupon){
            return {error: "Cupon no encontrado", code: 404}
        }
        const cuponJson = cupon.toJSON()
        return cuponJson;
    }

    async buscaCuponPorNombre (nombre){
        const cupon = await Cupon.findOne({where: {nombre: nombre}})
        if(!cupon){
            return {error: "Cupon no encontrado", code: 404}
        }
        const cuponJson = cupon.toJSON()
        return cuponJson;
    }

    async crearCupon(cupon){
        const cuponCreado = await Cupon.create(cupon);
        const cuponJson = cuponCreado.toJSON();
        return cuponJson;
    }

    async eliminarCuponPorNombreYProvedor(nombre, proveedor_id){
        const cuponEncontrado = await this.buscarCuponPorNombreYProveedor(nombre, proveedor_id);
        if(cuponEncontrado.error){
            return cuponEncontrado;
        }
        await Cupon.destroy({where: {nombre: nombre, proveedor_id: proveedor_id}});

        return cuponEncontrado;
    }
}

export default RepositorioCuponProveedor;