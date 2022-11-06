import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, dividerClasses, InputAdornment } from "@mui/material";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { v4 as uuidv4 } from "uuid";

import LocalRental from "./LocalRental";

function GetForm({ type }) {
  if (type == 30) {
    return <LocalRental />;
  } else {
    return <div></div>;
  }
}

export default GetForm;
