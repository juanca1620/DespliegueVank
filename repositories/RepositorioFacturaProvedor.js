import FacturaProvedor from '../dto/FacturaProveedorDTO.js';

class RepositorioFacturaProvedor {
    async crearFacturaProvedor(facturaProveedor) {
        const facturaProvedorCreada = await FacturaProvedor.create(facturaProveedor);
        const facturaProvedorJSON = facturaProvedorCreada.toJSON();
        return facturaProvedorJSON;
    }

    async buscarFacturaPorId(id) {
        const factura = await FacturaProvedor.findByPk(parseInt(id));
        if (!factura) {
            return { error: "Factura no encontrada", code: 404 };
        }
        return factura.toJSON();
    }

    // Obtener facturas por vendedor_id
    async obtenerFacturasPorVendedorId(vendedor_id) {
        const facturas = await FacturaProvedor.findAll({ where: { vendedor_id } });
        return facturas.map(factura => factura.toJSON());
    }

    // Obtener facturas por proveedor_id
    async obtenerFacturasPorProveedorId(proveedor_id) {
        const facturas = await FacturaProvedor.findAll({ where: { proveedor_id } });
        return facturas.map(factura => factura.toJSON());
    }
}

export default RepositorioFacturaProvedor;