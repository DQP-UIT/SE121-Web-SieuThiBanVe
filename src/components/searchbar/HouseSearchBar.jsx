import React, { useState } from "react";
import { TextField, MenuItem, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const HouseSearchBar = ({
  listofkind,
  listofflr,
  listoflength,
  listofwidth,
  listofbedrooms,
  onSearch,
}) => {
  const [kindofhouse, setKindofhouse] = useState("");
  const [numberofflr, setNumberofflr] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const handleSearchClick = () => {
    const filters = {
      productTypeId: kindofhouse || null,
      floor: numberofflr || null,
      numberBedRoom: bedrooms || null,
      length: length || null,
      width: width || null,
    };
    onSearch(filters); // Truyền các bộ lọc lên `SearchResults`
  };

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
        onChange={(e) => setKindofhouse(e.target.value)}
        variant="outlined"
        sx={{ minWidth: 120, mx: 1 }}
      >
        <MenuItem value="">Loại nhà</MenuItem>
        {listofkind.map((kind, index) => (
          <MenuItem key={index} value={index + 1}>
            {kind}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Số tầng"
        value={numberofflr}
        onChange={(e) => setNumberofflr(e.target.value)}
        variant="outlined"
        sx={{ minWidth: 120, mx: 1 }}
      >
        <MenuItem value="">Số tầng</MenuItem>
        {listofflr.map((flr, index) => (
          <MenuItem key={index} value={index + 1}>
            {flr}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Số phòng ngủ"
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
        variant="outlined"
        sx={{ minWidth: 120, mx: 1 }}
      >
        <MenuItem value="">Số phòng ngủ</MenuItem>
        {listofbedrooms.map((bed, index) => (
          <MenuItem key={index} value={bed}>
            {bed}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Chiều dài"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        variant="outlined"
        sx={{ minWidth: 120, mx: 1 }}
      >
        <MenuItem value="">Chiều dài</MenuItem>
        {listoflength.map((len, index) => (
          <MenuItem key={index} value={len.replace("m", "")}>
            {len}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Chiều rộng"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        variant="outlined"
        sx={{ minWidth: 120, mx: 1 }}
      >
        <MenuItem value="">Chiều rộng</MenuItem>
        {listofwidth.map((wid, index) => (
          <MenuItem key={index} value={wid.replace("m", "")}>
            {wid}
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
        onClick={handleSearchClick}
        sx={{ mx: 1 }}
      >
        Tìm
      </Button>
    </Box>
  );
};

export default HouseSearchBar;
