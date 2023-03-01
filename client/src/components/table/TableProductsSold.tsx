import { FC } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export const TableProductsSold: FC<{}> = function () {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'productName',
      headerName: 'Producto',
      type: 'string',
      width: 120,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'code',
      headerName: 'codigo',
      type: 'number',
      width: 100,
      editable: true,
      headerAlign: 'center',
    },
    {
      field: 'customer',
      headerName: 'Comprador',
      type: 'string',
      width: 300,
      editable: true,
      headerAlign: 'center',
    },
    {
      field: 'price',
      headerName: 'Precio x U',
      type: 'number',
      width: 110,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'quantity',
      headerName: 'Cantidad',
      type: 'number',
      width: 110,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'dateOfSale',
      headerName: 'Fecha de venta',
      type: 'date',
      width: 200,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'typeOfSale',
      headerName: 'Tipo de venta',
      type: 'string',
      width: 150,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'factura',
      headerName: 'Factura',
      type: 'string',
      width: 200,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    /* {
      field: 'fullName',
      headerName: 'Precio',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    }, */
  ];

  const rows = [
    {
      id: 1,
      productName: 'Agua 3L',
      code: 1004,
      customer: 'Municipalidad Alto de Alianza',
      price: 10,
      quantity: 80,
      dateOfSale: '2021-01-01',
      typeOfSale: 'Contado',
      factura: '001-001-0000001',
    },
    {
      id: 2,
      productName: 'Agua 20L',
      code: 1005,
      customer: 'Municipalidad Gregorio Albarracin',
      price: 20,
      quantity: 100,
      dateOfSale: '2021-01-06',
      typeOfSale: 'Credito',
      factura: '001-001-0000002',
    },
    { id: 3 },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
    {
      id: 13,
    },
  ];
  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={11}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};
