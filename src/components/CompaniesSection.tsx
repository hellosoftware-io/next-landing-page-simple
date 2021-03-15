import React from "react";
import { Container, Divider, Grid } from "@material-ui/core";
import Company from "interfaces/Company";
import Image from "next/image";

interface Props {
  companies: Company[];
}

export default function CompaniesSection({ companies }: Props): JSX.Element {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 12 } }}>
      <Divider sx={{ mb: 4 }} />
      <Grid container justifyContent="space-between" alignItems="center">
        {companies.map((company, index) => (
          <Grid
            item
            container
            justifySelf="center"
            alignItems="center"
            xs={6}
            sm={2}
            key={index}
          >
            <Image
              src={company.logo}
              alt={company.name}
              height={50}
              width={120}
            />
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ mt: 4 }} />
    </Container>
  );
}
