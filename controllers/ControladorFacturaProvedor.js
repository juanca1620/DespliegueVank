class ControladorFacturaProvedor {
    constructor(servicioFacturaProvedor) {
        this.servicioFacturaProvedor = servicioFacturaProvedor;
    }

    crearFacturaProvedor = async (req, res) => {
        try {
            const factura = req.body;
            const respuesta = await this.servicioFacturaProvedor.crearFactura(factura);
            if (respuesta.error) {
                res.status(respuesta.code).json(respuesta);
            } else {
                res.status(201).json(respuesta);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    obtenerFacturaPorId = async (req, res) => {
        try {
            const id = req.params.id;
            const respuesta = await this.servicioFacturaProvedor.obtenerFacturaPorId(id);
            if (respuesta.error) {
                res.status(respuesta.code).json(respuesta);
            } else {
                res.status(200).json(respuesta);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    obtenerItemsFacturaPorIdFactura = async (req, res) => {
        try {
            const id = req.params.id;
            const respuesta = await this.servicioFacturaProvedor.obtenerItemsFacturaPorIdFactura(id);
            if (respuesta.error) {
                res.status(respuesta.code).json(respuesta);
            } else {
                res.status(200).json(respuesta);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    // Obtener facturas por proveedor_id
    obtenerFacturasPorProveedorId = async (req, res) => {
        try {
            const proveedor_id = req.params.proveedor_id;
            if (!proveedor_id) {
                return res.status(400).json({ error: "El proveedor_id es obligatorio" });
            }

            const respuesta = await this.servicioFacturaProvedor.obtenerFacturasPorProveedorId(proveedor_id);
            if (respuesta.error) {
                res.status(respuesta.code).json(respuesta);
            } else {
                res.status(200).json(respuesta);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    // Obtener facturas por vendedor_id
    obtenerFacturasPorVendedorId = async (req, res) => {
        try {
            const vendedor_id = req.params.vendedor_id;
            if (!vendedor_id) {
                return res.status(400).json({ error: "El vendedor_id es obligatorio" });
            }

            const respuesta = await this.servicioFacturaProvedor.obtenerFacturasPorVendedorId(vendedor_id);
            if (respuesta.error) {
                res.status(respuesta.code).json(respuesta);
            } else {
                res.status(200).json(respuesta);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
}

export default ControladorFacturaProvedor;