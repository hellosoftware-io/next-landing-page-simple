import { Container, Typography } from "@material-ui/core";

type Props = {
  title: string;
  subtitle: string;
};

export default function BigSection({ title, subtitle }: Props): JSX.Element {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h2" textAlign="center">
        {title}
      </Typography>
      <Typography variant="body1" textAlign="center">
        {subtitle}
      </Typography>
    </Container>
  );
}
