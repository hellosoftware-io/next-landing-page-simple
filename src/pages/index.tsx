import { Button, Container, Box } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import StarIcon from "@material-ui/icons/Star";
import PeopleIcon from "@material-ui/icons/People";
import Page from "components/layout/Page";
import HeroSection from "components/HeroSection";
import React from "react";
import FeatureContainer from "components/FeatureContainer";
import FeatureBlocksContainer from "components/FeatureBlocksContainer";
import FeatureBlock from "components/FeatureBlock";
import BigSection from "components/BigSection";
import CompaniesSection from "components/CompaniesSection";
import { companies } from "data/companies";
import Image from "next/image";
import TestimonialSection from "components/TestimonialSection";
import { testimonials } from "data/testimonials";
import ContactSection from "components/ContactSection";

export default function HomePage(): JSX.Element {
  return (
    <Page maxWidth={false}>
      <HeroSection
        title="SaaS Product"
        subtitle="Modern, beautiful, bold. Solve problems, today"
        image="/assets/city.svg"
      >
        {/* <Link href="/react" passHref> */}
        <Button variant="contained" disableElevation sx={{ mr: 2, mt: 2 }}>
          Get started
        </Button>
        {/* </Link> */}
        {/* <Link href="/ios" passHref> */}
        <Button disableElevation sx={{ mr: 2, mt: 2 }}>
          Contact us
        </Button>
        {/* </Link> */}
      </HeroSection>
      <CompaniesSection companies={companies} />
      <FeatureContainer>
        <FeatureBlocksContainer>
          <FeatureBlock
            title="Intuitive"
            icon={<PeopleIcon />}
            content={
              <>
                Consequat id porta nibh venenatis cras sed felis eget velit. Ac
                felis donec et odio pellentesque diam volutpat commodo.
              </>
            }
          />
          <FeatureBlock
            title="Simple"
            icon={<StarIcon />}
            content={
              <>
                Ultricies leo integer malesuada nunc vel. Egestas pretium aenean
                pharetra magna ac placerat vestibulum.
              </>
            }
          />
          <FeatureBlock
            title="Cost effective"
            icon={<CodeIcon />}
            content={
              <>
                Vitae turpis massa sed elementum tempus egestas. Commodo sed
                egestas egestas fringilla phasellus faucibus.
              </>
            }
          />
        </FeatureBlocksContainer>
      </FeatureContainer>
      <BigSection
        title="Building a better tomorrow, today"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Container sx={{ display: "flex", justifyContent: "center", mb: 16 }}>
        <Image src="/assets/rocket.svg" width={500} height={500} />
      </Container>
      <Box sx={{ mb: 4 }}>
        <BigSection
          title="Our clients love us"
          subtitle="Lorem sed risus ultricies tristique nulla aliquet. Vitae nunc sed velit dignissim sodales ut."
        />
      </Box>
      <Box sx={{ mb: 8 }}>
        <TestimonialSection testimonials={testimonials} />
      </Box>
      <Box sx={{ mb: 4 }}>
        <ContactSection />
      </Box>
    </Page>
  );
}
