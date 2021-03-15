import {
  Typography,
  Container,
  Grid,
  Box,
  Divider,
  Button,
} from "@material-ui/core";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header(): JSX.Element {
  const router = useRouter();

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Container maxWidth="md" sx={{ py: 1 }}>
        <Grid container alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body1" align="center" sx={{ fontWeight: 600 }}>
              SaaS Product
            </Typography>
          </Grid>
          <Grid container item xs={10} justifyContent="flex-end">
            <Link href="/" passHref>
              <Button
                sx={{ mr: 2 }}
                color={router.pathname === "/" ? "primary" : "secondary"}
              >
                Home
              </Button>
            </Link>
            <Link href="/page2" passHref>
              <Button
                sx={{ mr: 2 }}
                color={router.pathname === "/" ? "primary" : "secondary"}
              >
                Page 2
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </Box>
  );
}
