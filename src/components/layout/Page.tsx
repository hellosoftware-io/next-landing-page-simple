import { Container, Typography } from "@material-ui/core";
import Head from "next/head";

type Props = {
  title?: string;
  seoTitle?: string;
  maxWidth?: false | "md" | "xs" | "sm" | "lg" | "xl" | undefined;
  children?: React.ReactNode;
};

export default function Page({
  title,
  seoTitle,
  maxWidth = "md",
  children,
}: Props): JSX.Element {
  return (
    <PageWrapper title={seoTitle ?? title} maxWidth={maxWidth}>
      {title ? (
        <Typography variant="h1" sx={{ mb: 2 }}>
          {title}
        </Typography>
      ) : null}
      {children}
    </PageWrapper>
  );
}

function PageWrapper({ children, title, maxWidth = "md" }: Props): JSX.Element {
  let titleString = "SaaS Product";
  if (title) {
    titleString = "SaaS Product | " + title;
  }
  if (maxWidth === false) {
    return (
      <>
        <Head>
          <title>{titleString}</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta
            name="description"
            content="Modern website templates built with React, Next, Material-UI, Firebase, and more."
          />
        </Head>
        {children}
      </>
    );
  } else {
    return (
      <Container maxWidth={maxWidth} sx={{ pt: 2 }}>
        <Head>
          <title>{titleString}</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta
            name="description"
            content="Modern website templates built with React, Next, Material-UI, Firebase, and more."
          />
        </Head>
        {children}
      </Container>
    );
  }
}
