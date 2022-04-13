import { Button, IconButton, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

/*
The Button comes with three variants: text (default), contained, and outlined.
*/

const MuiButton = () => {
  return (
    <Stack>
      <Stack spacing={2} direction="row" className="alignment">
        <Button variant="text" href="www.google.com">
          text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row" className="alignment">
        <Button variant="contained" color="primary">
          Primary{" "}
        </Button>
        <Button variant="contained" color="secondary">
          secondary{" "}
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row" className="alignment">
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>
          send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          send
        </Button>
        <IconButton aria-label="send" color="primary">
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
