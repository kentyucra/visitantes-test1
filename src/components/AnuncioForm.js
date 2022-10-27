import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, CircularProgress, InputAdornment } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


function AnuncioForm() {
  const [age, setAge] = React.useState('');
  const [selectedPhoto, setSelectedPhoto] = React.useState(undefined)
  const [preview, setPreview] = React.useState(undefined)

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const fileSelectedHandler = (event) => {
    console.log("event = ", event.target)
    if (event.target.files[0]) {
      console.log("inside if event = ", event.target)
      setSelectedPhoto(event.target.files[0])
      const objectUrl = URL.createObjectURL(event.target.files[0])
      console.log("objectURL = ", objectUrl)
      setPreview(objectUrl)
    }
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <FormControl >
            <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
              style={{ minWidth: 150 }}
            >
              <MenuItem value={10}>Venta de Propiedades</MenuItem>
              <MenuItem value={20}>Venta de Vehiculos</MenuItem>
              <MenuItem value={30}>Alquiler de locales para Eventos</MenuItem>
            </Select>
          </FormControl>


        </Grid>
        <Grid item>
          <TextField id="titulo" label="Titulo" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField id="direccion" label="Direccion" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField id="referencia" label="Referencia" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField id="ciudad" label="Ciudad" variant="outlined" defaultValue={"Juliaca"} />
        </Grid>
        <Grid item>
          <TextField id="departamento" label="Departamento" variant="outlined" defaultValue={"Puno"} />
        </Grid>
        <Grid item>
          <TextField id="area" label="Area" variant="outlined"
            InputProps={{
              endAdornment: <InputAdornment position="start">m2</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="filled-multiline-static"
            label="Descripcion"
            multiline
            rows={4}
            defaultValue="Default Value"
          />
        </Grid>
        <Grid item>
          <TextField id="contacto" label="Contacto (Telefono)" variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="start">
                <ContactPhoneIcon />
              </InputAdornment>,
            }}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            component="label"
            startIcon={<AddAPhotoIcon />}
          >

            Subir Foto
            <input
              type="file"
              hidden
              onChange={fileSelectedHandler}
            />
          </Button>
          {selectedPhoto ? <img src={preview} style={{ width: 200 }} /> : <CircularProgress />}
          {/* <img src={selectedPhoto} /> */}
        </Grid>
      </Grid>
    </Box >
  );
}

export default AnuncioForm