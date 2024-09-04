import ThemedText from "@/components/ThemedText";
import Card from "@/components/Card";

export default function Projects() {
  return (
    <div className="flex flex-col gap-4 p-32">
      <ThemedText className="text-3xl font-semibold md:text-5xl">
        Projects
      </ThemedText>
      <div className="flex flex-col gap-4 md:flex-row">
        <Card
          title="MangaNato Scraper"
          description="A cross-platform mobile application used to test React Native Frontend and Python Backend efficiency and functionality."
          link={"https://github.com/ivanleopoldo/mangareader_server"}
          photo={"/mangareader.png"}
        />
        <Card
          title="Savet"
          description="A Savings and Expenses tracker with data visualization and goals. (Work in Progress!)"
          link={"https://github.com/ivanleopoldo/savet"}
          photo={"/savet.png"}
        />
      </div>
    </div>
  );
}
