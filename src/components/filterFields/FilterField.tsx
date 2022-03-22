import { Box, TextField } from "@mui/material";


const FilterField = ({handleCb}:{handleCb:any}) => {
  return (
    <Box component="form" sx={{ mt: 2, mb: 2 }} noValidate>
      <TextField
        onInput={(e) => handleCb(e)}
        label="Search and Highlight"
        type="search"
        color="secondary"
        variant="standard"
      />
    </Box>
  );
};

export default FilterField;
