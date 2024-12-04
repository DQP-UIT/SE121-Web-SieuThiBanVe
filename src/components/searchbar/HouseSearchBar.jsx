import React, { useState } from "react";
import { TextField, MenuItem, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const HouseSearchBar = ({
  listofkind,
  listofflr,
  listoflength,
  listofwidth,
  listofbedrooms,
}) => {
  const [kindofhouse, setkindofhouse] = useState("");
  const [numberofflr, setnumberofflr] = useState("");
  const [length, setlength] = useState("");
  const [width, setwidth] = useState("");
  const [bedrooms, setbedrooms] = useState("");

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={2}
      border={1}
      borderColor="grey.650"
      borderRadius="5px"
      height={80}
      mx="auto"
    >
      <TextField
        select
        label="Loại nhà"
        value={kindofhouse}
        onChange={(e) => setkindofhouse(e.target.value)}
        variant="outlined"
        margin="normal"
        sx={{ minWidth: 120, mx: 1, height: 65 }}
      >
        <MenuItem value="">Loại nhà</MenuItem>
        {listofkind.map((kind) => (
          <MenuItem key={kind} value={kind}>
            {kind}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Số tầng"
        value={numberofflr}
        onChange={(e) => setnumberofflr(e.target.value)}
        variant="outlined"
        margin="normal"
        sx={{ minWidth: 120, mx: 1, height: 65 }}
      >
        <MenuItem value="">Số tầng</MenuItem>
        {listofflr.map((flr) => (
          <MenuItem key={flr} value={flr}>
            {flr}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Số phòng ngủ"
        value={bedrooms}
        onChange={(e) => setbedrooms(e.target.value)}
        variant="outlined"
        margin="normal"
        sx={{ minWidth: 145, mx: 1, height: 65 }}
      >
        <MenuItem value="">Số phòng ngủ</MenuItem>
        {listofbedrooms.map((bed) => (
          <MenuItem key={bed} value={bed}>
            {bed}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Chiều dài"
        value={length}
        onChange={(e) => setlength(e.target.value)}
        variant="outlined"
        margin="normal"
        sx={{ minWidth: 120, mx: 1, height: 65 }}
      >
        <MenuItem value="">Chiều dài</MenuItem>
        {listoflength.map((len) => (
          <MenuItem key={len} value={len}>
            {len}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Chiều rộng"
        value={width}
        onChange={(e) => setwidth(e.target.value)}
        variant="outlined"
        margin="normal"
        sx={{ minWidth: 120, mx: 1, height: 65 }}
      >
        <MenuItem value="">Chiều rộng</MenuItem>
        {listofwidth.map((wid) => (
          <MenuItem key={wid} value={wid}>
            {wid}
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
        sx={{ mx: 1, height: 55, minWidth: 80 }}
      >
        Tìm
      </Button>
    </Box>
  );
};

export default HouseSearchBar;
