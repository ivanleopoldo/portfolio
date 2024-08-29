import BentoSection from "@/components/BentoSection";
import ProgressBar from "@/components/ProgressBar";

export default function Languages() {
  return (
    <div className="grid-rows-7 md:grid-rows-9 mt-60 grid grid-cols-4 gap-3 px-4 text-xs md:mt-0 md:h-screen md:grid-cols-6 md:gap-5 md:px-32 md:py-52 md:text-base">
      <BentoSection className="col-span-2 row-span-3 md:col-span-3 md:row-span-5">
        <p className="font-semibold md:mb-4">Languages</p>
        <ProgressBar label="C" progress="65%" />
        <ProgressBar label="Dart" progress="35%" />
        <ProgressBar label="Java" progress="45%" />
        <ProgressBar label="Javascript" progress="85%" />
        <ProgressBar label="PHP" progress="30%" />
        <ProgressBar label="Python" progress="80%" />
        <ProgressBar label="Rust" progress="15%" />
      </BentoSection>
      <BentoSection className="col-span-2 row-span-2 md:col-span-3 md:row-span-4">
        <p className="font-semibold md:mb-4">Databases & Backend Systems</p>
        <ProgressBar label="Firebase" progress="65%" />
        <ProgressBar label="MongoDB" progress="25%" />
        <ProgressBar label="MySQL" progress="95%" />
        <ProgressBar label="PostgresSQL" progress="35%" />
        <ProgressBar label="Supabase" progress="45%" />
      </BentoSection>
      <BentoSection className="col-span-2 row-span-2 md:col-span-3 md:row-span-4">
        <p className="font-semibold md:mb-4">
          Frameworks or Libraries and CSS Frameworks
        </p>
        <ProgressBar label="React" progress="85%" />
        <ProgressBar label="React Native" progress="75%" />
        <ProgressBar label="NextJS" progress="55%" />
        <ProgressBar label="TailwindCSS" progress="85%" />
        <ProgressBar label="Flutter" progress="65%" />
      </BentoSection>
      <BentoSection className="col-span-2 row-span-1 md:col-span-3 md:row-span-3">
        <p className="font-semibold md:mb-4">UI Libraries</p>
        <ProgressBar label="shadcn" progress="50%" />
        <ProgressBar label="TailwindUI" progress="30%" />
        <ProgressBar label="NextUI" progress="20%" />
      </BentoSection>
      <BentoSection className="col-span-4 row-span-1 flex items-center justify-center md:col-span-6 md:row-span-1">
        Ready to learn more and enhance my skillset!
      </BentoSection>
    </div>
  );
}
