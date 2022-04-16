import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MuiToggleButton = () => {
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);
  console.log(formats);
  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
  };

  return (
    <Stack>
      <ToggleButtonGroup
        direction="row"
        value={formats}
        onChange={handleFormat}
        size="small"
        color="info"
        exclusive
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underline" aria-label="underline">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default MuiToggleButton;
