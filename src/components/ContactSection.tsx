import React from "react";
import { Typography, Box, Grid, Container, Button } from "@material-ui/core";
import Image from "next/image";

export default function ContactSection(): JSX.Element {
  return (
    <Container maxWidth="md">
      <Box sx={{ backgroundColor: "#EDE7F6", borderRadius: 4, p: 2 }}>
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2">Contact us</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Get in touch to ask us anything, sales or otherwise!
            </Typography>
            <Button variant="contained" href="mailto:hello@example.com">
              Send an email
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container>
              <Image src="/assets/contact.svg" width={400} height={250} />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
