import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SelectAutoWidth: React.FC<{
  options: string[];
  handleChange: (value: string) => void;
}> = ({ options, handleChange }) => {
  const [item, setItem] = React.useState("");

  const handleLocalChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    setItem(selectedValue);
    handleChange(selectedValue);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 170 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Select Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={item}
          onChange={handleLocalChange}
          fullWidth
          label="Select Type"
        >
          {options.map((opt, index) => (
            <MenuItem key={index} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectAutoWidth;
