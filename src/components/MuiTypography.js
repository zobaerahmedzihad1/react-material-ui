import {
  createTheme,
  responsiveFontSizes,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
/*
 The typography object comes with 13 variants by default:
h1
h2
h3
h4
h5
h6
subtitle1
subtitle2
body1
body2
button
caption
overline
 */

const MuiTypography = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Stack>
      <Typography variant="h1">h1 Typography Heading.</Typography>
      <Typography variant="h2">h2 Typography Heading.</Typography>
      <Typography variant="h3">h3 Typography Heading.</Typography>
      <Typography variant="h4">h4 Typography Heading.</Typography>
      <Typography variant="h5">h5 Typography Heading.</Typography>
      <Typography variant="h6">h6 Typography Heading.</Typography>
      <Typography>Normal but use body One by default.</Typography>

      <Typography variant="button">Button</Typography>
      <Typography variant="caption">Caption</Typography>
      <Typography variant="overline">Overline</Typography>

      <Typography variant="h4" component="h1">
        semantic Typography Heading.
      </Typography>

      {/* responsive font sizes. */}
      <Typography variant="h2"> Without Responsive variant h3</Typography>
      <ThemeProvider theme={theme}>
        <Typography variant="h2">Responsive variant h3</Typography>
        <Typography variant="h3">Responsive variant h4</Typography>
        <Typography variant="h4">Responsive variant h5</Typography>
      </ThemeProvider>

      {/* sub title  */}

      <Typography variant="subtitle1">
        subtitle1 : Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Aliquam exercitationem rerum dolore natus laudantium possimus!{" "}
      </Typography>

      <Typography variant="subtitle2">
        subtitle2 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
        recusandae, nihil maiores inventore quibusdam fuga perferendis omnis
        ducimus eveniet tempore.{" "}
      </Typography>

      {/* body element */}

      <Typography variant="body1">
        body 1 : Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Deserunt temporibus laboriosam odit ut nesciunt quos delectus? Eius
        nostrum nemo praesentium!
      </Typography>
      <Typography variant="body2">
        body 2 : Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Deserunt temporibus laboriosam odit ut nesciunt quos delectus? Eius
        nostrum nemo praesentium!
      </Typography>
    </Stack>
  );
};

export default MuiTypography;
