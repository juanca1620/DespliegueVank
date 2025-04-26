class ControladorFacturaVendedor {
    constructor(servicioFacturaVendedor) {
        this.servicioFacturaVendedor = servicioFacturaVendedor;
    }

    crearFacturaVendedor = async (req, res) => {
        try {
            const factura = req.body;
            const respuesta = await this.servicioFacturaVendedor.crearFactura(factura);
            if (respuesta.error) {
                return res.status(respuesta.code).json(respuesta);
            }
            return res.status(201).json(respuesta);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    obtenerFacturaPorId = async (req, res) => {
        try {
            const id = req.params.id;
            const respuesta = await this.servicioFacturaVendedor.obtenerFacturaPorId(id);
            if (respuesta.error) {
                return res.status(respuesta.code).json(respuesta);
            }
            return res.status(200).json(respuesta);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    obtenerItemsFacturaPorIdFactura = async (req, res) => {
        try {
            const id_factura = req.params.id_factura;
            const respuesta = await this.servicioFacturaVendedor.obtenerItemsFacturaPorIdFactura(id_factura);
            if (respuesta.error) {
                return res.status(respuesta.code).json(respuesta);
            }
            return res.status(200).json(respuesta);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    obtenerFacturasPorVendedorId = async (req, res) => {
        try {
            const vendedor_id = req.params.vendedor_id;
            if (!vendedor_id) {
                return res.status(400).json({ error: "El vendedor_id es obligatorio" });
            }

            const respuesta = await this.servicioFacturaVendedor.obtenerFacturasPorVendedorId(vendedor_id);
            if (respuesta.error) {
                return res.status(respuesta.code).json(respuesta);
            }
            return res.status(200).json(respuesta);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };

    // Obtener facturas por cliente_id
    obtenerFacturasPorClienteId = async (req, res) => {
        try {
            const cliente_id = req.params.cliente_id;
            if (!cliente_id) {
                return res.status(400).json({ error: "El cliente_id es obligatorio" });
            }

            const respuesta = await this.servicioFacturaVendedor.obtenerFacturasPorClienteId(cliente_id);
            if (respuesta.error) {
                return res.status(respuesta.code).json(respuesta);
            }
            return res.status(200).json(respuesta);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
}

export default ControladorFacturaVendedor;