class ControladorFacturaProvedor{
    constructor(servicioFacturaProvedor){
        this.servicioFacturaProvedor = servicioFacturaProvedor;
    }
    
    crearFacturaProvedor = async(req, res)=>{
        try {
            const factura = req.body;
            const respuesta = await this.servicioFacturaProvedor.crearFactura(factura);
            if(respuesta.error){
                res.status(respuesta.code).json(respuesta);
            }else{
                res.status(201).json(respuesta);
            }
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    obtenerFacturaPorId = async(req, res)=>{
        try {
            const id = req.params.id;
            const respuesta = await this.servicioFacturaProvedor.obtenerFacturaPorId(id);
            if(respuesta.error){
                res.status(respuesta.code).json(respuesta);
            }else{
                res.status(200).json(respuesta);
            }
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    obtenerItemsFacturaPorIdFactura = async(req, res)=>{
        try {
            const id = req.params.id;
            const respuesta = await this.servicioFacturaProvedor.obtenerItemsFacturaPorIdFactura(id);
            if(respuesta.error){
                res.status(respuesta.code).json(respuesta);
            }else{
                res.status(200).json(respuesta);
            }
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
}

export default ControladorFacturaProvedor;