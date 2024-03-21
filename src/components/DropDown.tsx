import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SelectAutoWidth: React.FC<{
  name: string;
  index: number;
  typeHandler: (index: number, inputItem: string) => void;
}> = ({ name, index, typeHandler }) => {
  const [item, setItem] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setItem(event.target.value);
    typeHandler(index, event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 170 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={item}
          onChange={handleChange}
          fullWidth
          label="Select Type"
        >
          <MenuItem value="text">Text</MenuItem>
          <MenuItem value="dropdown">Dropdown</MenuItem>
          <MenuItem value="checkbox">Check Box</MenuItem>
          <MenuItem value="radio">Radio</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectAutoWidth;
