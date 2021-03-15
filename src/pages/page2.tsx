import Page from "components/layout/Page";
import BigSection from "components/BigSection";

export default function Page2(): JSX.Element {
  return (
    <Page maxWidth={false}>
      <BigSection
        title="Example second page"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </Page>
  );
}
