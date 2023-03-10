import { FC } from 'react';
import * as yup from 'yup';

import { useFormik } from 'formik';
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from '@mui/material';

const validationSchema = yup.object({
  nameProduct: yup.string().required('espacio requerido').max(25, 'Must be 25 characters or less'),
  codeProduct: yup.number().required('espacio requerido'),
  buyer: yup.string().required('espacio requerido'),
  quantity: yup.number().required('espacio requerido'),
  typeSold: yup.string(),
  date: yup.date().required('espacio requerido').min(new Date(), 'Esooge una fecha futura'),
  pdfFile: yup.string().required('espacio requerido'),
});

export const ProductsFormPage: FC<{}> = function () {
  const formik = useFormik({
    initialValues: {
      nameProduct: '',
      codeProduct: '',
      buyer: '',
      quantity: '',
      typeSold: '',
      date: '',
      pdfFile: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      /*  dispatch(addProduct(values));
    navigate('/products'); */
    },
  });
  return (
    <Box
      display={'flex'}
      flexDirection="column"
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ maxWidth: 'md', pt: 6 }}
    >
      <Typography variant="h4" gutterBottom>
        Formulario del Producto
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={formik.handleSubmit} noValidate>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Nombre del Producto"
                  placeholder="Nombre del Producto"
                  name="nameProduct"
                  value={formik.values.nameProduct}
                  onChange={formik.handleChange}
                  error={formik.touched.nameProduct && Boolean(formik.errors.nameProduct)}
                  helperText={formik.touched.nameProduct && formik.errors.nameProduct}
                  required
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  type={'number'}
                  label="Código del Producto"
                  name="codeProduct"
                  value={formik.values.codeProduct}
                  onChange={formik.handleChange}
                  error={formik.touched.codeProduct && Boolean(formik.errors.codeProduct)}
                  helperText={formik.touched.codeProduct && formik.errors.codeProduct}
                  required
                  placeholder="Código del Producto"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  type={'text'}
                  label="Comprador"
                  name="buyer"
                  value={formik.values.buyer}
                  onChange={formik.handleChange}
                  error={formik.touched.buyer && Boolean(formik.errors.buyer)}
                  helperText={formik.touched.buyer && formik.errors.buyer}
                  required
                  placeholder="nombre del comprador"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  name="quantity"
                  type={'number'}
                  value={formik.values.quantity}
                  onChange={formik.handleChange}
                  error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                  helperText={formik.touched.quantity && formik.errors.quantity}
                  required
                  variant="outlined"
                  fullWidth
                  label="cantidad"
                />
              </Grid>
              <Grid xs={12} item>
                <FormControl fullWidth>
                  <InputLabel id="typeSold">Tipo de Venta</InputLabel>
                  <Select
                    labelId="typeSold"
                    label="Tipo de Venta"
                    id="typeSold"
                    name="typeSold"
                    required
                    value={formik.values.typeSold}
                    onChange={formik.handleChange}
                    error={formik.touched.typeSold && Boolean(formik.errors.typeSold)}
                    fullWidth
                  >
                    <MenuItem value={'contado'}>Contado</MenuItem>
                    <MenuItem value={'credito'}>Credito</MenuItem>
                    <MenuItem value={'otros'}>Otros</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={12} item>
                <InputLabel>Fecha de Venta</InputLabel>
                <TextField
                  name="date"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  error={formik.touched.date && Boolean(formik.errors.date)}
                  helperText={formik.touched.date && formik.errors.date}
                  required
                  type="date"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <InputLabel />
                <TextField
                  name="pdfFile"
                  value={formik.values.pdfFile}
                  onChange={formik.handleChange}
                  error={formik.touched.pdfFile && Boolean(formik.errors.pdfFile)}
                  helperText={formik.touched.pdfFile && formik.errors.pdfFile}
                  required
                  type="file"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Agregar Venta
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};
