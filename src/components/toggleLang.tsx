import React, { useState } from "react";
import { useAppDispach } from "../redux/hook"; 
import { toggleUS, toggleUKR } from "../redux/langSlice";
import { Box, Switch, Typography } from "@mui/material";

const ToggleLang: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useAppDispach();

  const handleChangeLang = (nextChecked: boolean) => {
    checked 
        ? dispatch(toggleUS("en-US")) 
        : dispatch(toggleUKR("uk"));

    setChecked(! nextChecked);
    
  };

  return (
    <Box>
      {checked ? (
        <Typography>Ukrainian</Typography>
      ) : (
        <Typography>English</Typography>
      )}
      <Switch onChange={() => handleChangeLang(checked)}/>
    </Box>
  );
};

export default ToggleLang;