import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, InputAdornment } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { v4 as uuidv4 } from 'uuid';



function AnuncioForm() {
  const [age, setAge] = React.useState('');
  const [images, setImages] = React.useState([])
  const [uuid,] = React.useState(uuidv4);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const extractImagesFromLocalStorage = () => {
    const imagesURL = []
    Object.keys(localStorage).forEach((key) => {
      if (key.substring(0, 46) === `${uuid}_objectURL`) {
        imagesURL.push(localStorage.getItem(key))
      }

    })
    return imagesURL
  }

  const fileSelectedHandler = (event) => {
    if (event.target.files[0]) {
      const objectUrl = URL.createObjectURL(event.target.files[0])
      const size = localStorage.length
      localStorage.setItem(`${uuid}_objectURL_${size}`, objectUrl)
      setImages(extractImagesFromLocalStorage());
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

            Anhadir Foto
            <input
              type="file"
              hidden
              onChange={fileSelectedHandler}
            />
          </Button>
          {/* {selectedPhoto ? <img src={preview} style={{ width: 200 }} /> : <CircularProgress />} */}
          {/* <img src={selectedPhoto} /> */}
        </Grid>
        <Grid item>
          <ImageList
            sx={{
              gridAutoFlow: "column",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr)) !important",
              gridAutoColumns: "minmax(160px, 1fr)"
            }}
          >
            {images.map((image) => (
              <ImageListItem>
                <img src={image} style={{ width: 200 }} />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </Box >
  );
}

export default AnuncioForm