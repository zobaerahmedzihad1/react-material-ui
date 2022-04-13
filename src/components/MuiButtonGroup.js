import { Button, ButtonGroup, Stack } from "@mui/material";
import React from "react";

const MuiButtonGroup = () => {
  return (
    <div >
      <Stack direction="row" className="alignment">
        <ButtonGroup variant="contained">
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row" spacing={2} className="alignment">
        <ButtonGroup variant="text" color='secondary' >
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row" spacing={2} className="alignment">
        <ButtonGroup variant="outlined" color='secondary' size='small' >
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
    </div>
  );
};

export default MuiButtonGroup;
