import React from "react";
import { Input, Card, Form, DatePicker, Select, Checkbox } from "antd";
import { useIntl } from "react-intl";
import InputNumber from "components/bananacode-components/InputNumber";

const rules = {
  amount: [
    {
      required: true,
      message: "profesional.services.input.number",
    },
  ],
  description: [
    {
      required: true,
      message: "Por favor ingrese una descripción",
    },
  ],
  date: [
    {
      required: true,
      message: "Por favor ingrese una fecha",
    },
  ],
  destiny_origin: [
    {
      required: true,
      message: "Por favor seleccione una fuente a afectar",
    },
  ],
  category: [
    {
      required: true,
      message: "Por favor seleccione una categoria",
    },
  ],
  frequency: [
    {
      required: false,
      message: "Por favor seleccione la frecuencia",
    },
  ],
  bill: [
    {
      required: false,
      message: "Por favor ingrese el numero de factura/clave",
    },
  ],
  IVA: [
    {
      required: false,
      message: "Por favor ingrese si aplica IVA",
    },
  ],
  supplier_customer: [
    {
      required: true,
      message: "Por favor ingrese el dato solicitado",
    },
  ],
  state: [
    {
      required: true,
      message: "Por favor ingrese un estado",
    },
  ],
};

const { Option } = Select;
const GeneralField = (props) => {
  const intl = useIntl();

  const formatRules = (specificRules) => {
    const newRules = specificRules.map((rule) => {
      return {
        required: rule.required,
        message: intl.formatMessage({ id: rule.message }),
      };
    });
    console.log(newRules);
    return newRules;
  };

  switch (props.viewtype) {
    case "Revenue":
      return (
        <Card title="Agregar Ingreso">
          <div className="ant-row">
            <div className="ant-col ant-col-6">
              <Form.Item
                name="amount"
                label="Monto"
                rules={formatRules(rules.amount)}
              >
                <InputNumber style={{ width: "75%" }}></InputNumber>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="date"
                label="Fecha De Ingreso"
                rules={rules.date}
              >
                <DatePicker
                  style={{ width: "75%" }}
                  format="DD/MM/YYYY"
                ></DatePicker>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="origin"
                label="Origen De Ingreso"
                rules={rules.destiny_origin}
              >
                <Select style={{ width: "75%" }}>
                  <Option value="1">Salario</Option>
                  <Option value="2">Intereses</Option>
                  <Option value="2">Alquiler Casa</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="destiny"
                label="Destino Del Ingreso"
                rules={rules.destiny_origin}
              >
                <Select style={{ width: "75%" }}>
                  <Option value="1">Cuenta 55678</Option>
                  <Option value="2">Efectivo</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className="ant-row">
            <div className="ant-col ant-col-24">
              <Form.Item
                name="description"
                label="Descripción"
                rules={rules.description}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </div>
          </div>
          <Form.Item
            name="frequency"
            label="Frecuencia"
            rules={rules.frequency}
          >
            <Checkbox value="1">¿Es un ingreso recurrente?</Checkbox>
          </Form.Item>
        </Card>
      );

    case "Expenses":
      return (
        <Card title="Agregar Egreso">
          <div className="ant-row">
            <div className="ant-col ant-col-6">
              <Form.Item name="amount" label="Monto" rules={rules.amount}>
                <InputNumber style={{ width: "75%" }}></InputNumber>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="date"
                label="Fecha De Ingreso"
                rules={rules.date}
              >
                <DatePicker
                  style={{ width: "75%" }}
                  format="DD/MM/YYYY"
                ></DatePicker>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="origin"
                label="Fuente a afectar"
                rules={rules.destiny_origin}
              >
                <Select style={{ width: "75%" }}>
                  <Option value="1">TC 5867</Option>
                  <Option value="2">Cuenta 55678</Option>
                  <Option value="2">TB 2216</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="category"
                label="Destino Del Ingreso"
                rules={rules.category}
              >
                <Select style={{ width: "75%" }}>
                  <Option value="1">Comida</Option>
                  <Option value="2">Ocio</Option>
                  <Option value="2">Servicios Publicos</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className="ant-row">
            <div className="ant-col ant-col-24">
              <Form.Item
                name="description"
                label="Descripción"
                rules={rules.description}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </div>
          </div>
          <Form.Item
            name="frequency"
            label="Frecuencia"
            rules={rules.frequency}
          >
            <Checkbox value="1">¿Es un egreso recurrente?</Checkbox>
          </Form.Item>
        </Card>
      );
    case "RevenuePSB":
      return (
        <Card title="Agregar Ingreso">
          <div className="ant-row">
            <div className="ant-col ant-col-6">
              <Form.Item name="amount" label="Monto" rules={rules.amount}>
                <InputNumber style={{ width: "75%" }}></InputNumber>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="date"
                label="Fecha De Ingreso"
                rules={rules.date}
              >
                <DatePicker
                  style={{ width: "75%" }}
                  format="DD/MM/YYYY"
                ></DatePicker>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="destiny"
                label="Origen De Ingreso"
                rules={rules.destiny_origin}
              >
                <Select style={{ width: "75%" }}>
                  <Option value="1">Salario</Option>
                  <Option value="2">Intereses</Option>
                  <Option value="2">Alquiler Casa</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="destiny"
                label="Destino Del Ingreso"
                rules={rules.destiny_origin}
              >
                <Select style={{ width: "75%" }}>
                  <Option value="1">Cuenta 55678</Option>
                  <Option value="2">Efectivo</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className="ant-row">
            <div className="ant-col ant-col-24">
              <Form.Item
                name="description"
                label="Descripción"
                rules={rules.description}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </div>
          </div>
          <Form.Item
            name="frequency"
            label="Frecuencia"
            rules={rules.frequency}
          >
            <Checkbox value="1">¿Es un ingreso recurrente?</Checkbox>
          </Form.Item>
        </Card>
      );
    case "COGS":
      return (
        <Card title="Agregar Costos de los bienes vendidos (COGS)">
          <div className="ant-row">
            <div className="ant-col ant-col-6">
              <Form.Item name="amount" label="Monto" rules={rules.amount}>
                <InputNumber style={{ width: "75%" }}></InputNumber>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item name="date" label="Fecha De Pago" rules={rules.date}>
                <DatePicker
                  style={{ width: "75%" }}
                  format="DD/MM/YYYY"
                ></DatePicker>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="supplier"
                label="Proveedor"
                rules={rules.supplier_customer}
              >
                <Input style={{ width: "75%" }} />
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="IVA"
                label="¿Aplica pago de IVA?"
                rules={rules.IVA}
              >
                <Checkbox value="1"></Checkbox>
              </Form.Item>
            </div>
          </div>
          <div className="ant-row">
            <div className="ant-col ant-col-24">
              <Form.Item
                name="description"
                label="Descripción"
                rules={rules.description}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </div>
          </div>
          <Form.Item
            name="bill"
            label="Numero de clave(factura)"
            rules={rules.bill}
          >
            <Input></Input>
          </Form.Item>
        </Card>
      );
    case "SG&A":
      return (
        <Card title="Agregar Gastos de venta, generales y administrativos (SG&A)">
          <div className="ant-row">
            <div className="ant-col ant-col-6">
              <Form.Item name="amount" label="Monto" rules={rules.amount}>
                <InputNumber style={{ width: "75%" }}></InputNumber>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item name="date" label="Fecha De Pago" rules={rules.date}>
                <DatePicker
                  style={{ width: "75%" }}
                  format="DD/MM/YYYY"
                ></DatePicker>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="supplier"
                label="Proveedor"
                rules={rules.supplier_customer}
              >
                <Input style={{ width: "75%" }} />
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="IVA"
                label="¿Aplica pago de IVA?"
                rules={rules.IVA}
              >
                <Checkbox value="1"></Checkbox>
              </Form.Item>
            </div>
          </div>
          <div className="ant-row">
            <div className="ant-col ant-col-24">
              <Form.Item
                name="description"
                label="Descripción"
                rules={rules.description}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </div>
          </div>
          <Form.Item
            name="bill"
            label="Numero de clave(factura)"
            rules={rules.bill}
          >
            <Input></Input>
          </Form.Item>
        </Card>
      );
    case "CAPEX":
      return (
        <Card title="Agregar Gastos al capital (CAPEX)">
          <div className="ant-row">
            <div className="ant-col ant-col-6">
              <Form.Item name="amount" label="Monto" rules={rules.amount}>
                <InputNumber style={{ width: "75%" }}></InputNumber>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item name="date" label="Fecha De Pago" rules={rules.date}>
                <DatePicker
                  style={{ width: "75%" }}
                  format="DD/MM/YYYY"
                ></DatePicker>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="supplier"
                label="Proveedor"
                rules={rules.supplier_customer}
              >
                <Input style={{ width: "75%" }} />
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="IVA"
                label="¿Aplica pago de IVA?"
                rules={rules.IVA}
              >
                <Checkbox value="1"></Checkbox>
              </Form.Item>
            </div>
          </div>
          <div className="ant-row">
            <div className="ant-col ant-col-24">
              <Form.Item
                name="description"
                label="Descripción"
                rules={rules.description}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </div>
          </div>
          <Form.Item
            name="bill"
            label="Numero de clave(factura)"
            rules={rules.bill}
          >
            <Input></Input>
          </Form.Item>
        </Card>
      );
    case "CXC":
      return (
        <Card title="Cuentas por cobrar (CXC)">
          <div className="ant-row">
            <div className="ant-col ant-col-6">
              <Form.Item name="amount" label="Monto" rules={rules.amount}>
                <InputNumber style={{ width: "75%" }}></InputNumber>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="client"
                label="Cliente"
                rules={rules.supplier_customer}
              >
                <Input style={{ width: "75%" }} />
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item name="date" label="Fecha De Cobro" rules={rules.date}>
                <DatePicker
                  style={{ width: "75%" }}
                  format="DD/MM/YYYY"
                ></DatePicker>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="state"
                label="Estado del cobro"
                rules={rules.state}
              >
                <Select style={{ width: "75%" }}>
                  <Option value="1">Por Cobrar</Option>
                  <Option value="2">Cobrado</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className="ant-row">
            <div className="ant-col ant-col-24">
              <Form.Item
                name="description"
                label="Descripción"
                rules={rules.description}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </div>
          </div>
        </Card>
      );
    case "CXP":
      return (
        <Card title="Cuentas Por Pagar (CXP)">
          <div className="ant-row">
            <div className="ant-col ant-col-6">
              <h1>{props.viewtype.parametro2}</h1>
              <Form.Item name="amount" label="Monto" rules={rules.amount}>
                <InputNumber style={{ width: "75%" }}></InputNumber>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="supplier"
                label="Proveedor"
                rules={rules.supplier_customer}
              >
                <Input style={{ width: "75%" }} />
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item name="date" label="Fecha De Cobro" rules={rules.date}>
                <DatePicker
                  style={{ width: "75%" }}
                  format="DD/MM/YYYY"
                ></DatePicker>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="state"
                label="Estado del cobro"
                rules={rules.state}
              >
                <Select style={{ width: "75%" }}>
                  <Option value="1">Por Pagar</Option>
                  <Option value="2">Pagado</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className="ant-row">
            <div className="ant-col ant-col-24">
              <Form.Item
                name="description"
                label="Descripción"
                rules={rules.description}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </div>
          </div>
        </Card>
      );
    case "Payroll":
      return (
        <Card title="Planilla">
          <div className="ant-row">
            <div className="ant-col ant-col-6">
              <Form.Item name="amount" label="Monto" rules={rules.amount}>
                <InputNumber style={{ width: "75%" }}></InputNumber>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="supplier"
                label="Proveedor"
                rules={rules.supplier_customer}
              >
                <Input style={{ width: "75%" }} />
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item name="date" label="Fecha De Cobro" rules={rules.date}>
                <DatePicker
                  style={{ width: "75%" }}
                  format="DD/MM/YYYY"
                ></DatePicker>
              </Form.Item>
            </div>
            <div className="ant-col ant-col-6">
              <Form.Item
                name="state"
                label="Estado del cobro"
                rules={rules.state}
              >
                <Select style={{ width: "75%" }}>
                  <Option value="1">Por Pagar</Option>
                  <Option value="2">Pagado</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className="ant-row">
            <div className="ant-col ant-col-24">
              <Form.Item
                name="description"
                label="Descripción"
                rules={rules.description}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </div>
          </div>
        </Card>
      );
    default:
      return <h1>Valor invalido</h1>;
  }
};

export default GeneralField;
