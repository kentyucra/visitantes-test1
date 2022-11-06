import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, InputAdornment } from "@mui/material";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { v4 as uuidv4 } from "uuid";
import GetForm from "./forms/GetForm";

function Form() {
  const [type, setType] = React.useState("");
  const [images, setImages] = React.useState([]);
  const [uuid] = React.useState(uuidv4);

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const extractImagesFromLocalStorage = () => {
    const imagesURL = [];
    Object.keys(localStorage).forEach((key) => {
      if (key.substring(0, 46) === `${uuid}_objectURL`) {
        imagesURL.push(localStorage.getItem(key));
      }
    });
    return imagesURL;
  };

  const fileSelectedHandler = (event) => {
    if (event.target.files[0]) {
      const objectUrl = URL.createObjectURL(event.target.files[0]);
      const size = localStorage.length;
      localStorage.setItem(`${uuid}_objectURL_${size}`, objectUrl);
      setImages(extractImagesFromLocalStorage());
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Type"
              onChange={handleChange}
              style={{ minWidth: 150 }}
            >
              <MenuItem value={10}>Venta de Propiedades</MenuItem>
              <MenuItem value={20}>Venta de Vehiculos</MenuItem>
              <MenuItem value={30}>Alquiler de Local para Eventos</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <GetForm type={type} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Form;
