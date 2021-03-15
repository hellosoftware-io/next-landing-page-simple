import React from "react";
import { Grid } from "@material-ui/core";

interface Props {
  children: React.ReactNodeArray;
}

export default function FeatureBlocksContainer({
  children,
}: Props): JSX.Element {
  return (
    <Grid container spacing={4}>
      {children}
    </Grid>
  );
}
