import BentoSection from "@/components/BentoSection";
import ProgressBar from "@/components/ProgressBar";

export default function Languages() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="grid-rows-9 grid h-screen grid-cols-6 gap-5 px-28 py-52">
        <BentoSection className="col-span-3 row-span-5">
          <p className="mb-4 font-semibold">Languages</p>
          <ProgressBar label="C" progress="65%" />
          <ProgressBar label="Dart" progress="35%" />
          <ProgressBar label="Java" progress="45%" />
          <ProgressBar label="Javascript" progress="85%" />
          <ProgressBar label="PHP" progress="30%" />
          <ProgressBar label="Python" progress="80%" />
          <ProgressBar label="Rust" progress="15%" />
        </BentoSection>
        <BentoSection className="col-span-3 row-span-4">
          <p className="mb-4 font-semibold">Databases & Backend Systems</p>
          <ProgressBar label="Firebase" progress="65%" />
          <ProgressBar label="MongoDB" progress="25%" />
          <ProgressBar label="MySQL" progress="95%" />
          <ProgressBar label="PostgresSQL" progress="35%" />
          <ProgressBar label="Supabase" progress="45%" />
        </BentoSection>
        <BentoSection className="col-span-3 row-span-4">
          <p className="mb-4 font-semibold">
            Frameworks or Libraries and CSS Frameworks
          </p>
          <ProgressBar label="React" progress="85%" />
          <ProgressBar label="React Native" progress="75%" />
          <ProgressBar label="NextJS" progress="55%" />
          <ProgressBar label="TailwindCSS" progress="85%" />
          <ProgressBar label="Flutter" progress="65%" />
        </BentoSection>
        <BentoSection className="col-span-3 row-span-3">
          <p className="mb-4 font-semibold">UI Libraries</p>
          <ProgressBar label="shadcn" progress="50%" />
          <ProgressBar label="TailwindUI" progress="30%" />
          <ProgressBar label="NextUI" progress="20%" />
        </BentoSection>
        <BentoSection className="col-span-6 row-span-1 flex items-center justify-center">
          Ready to learn more and enhance my skillset!
        </BentoSection>
      </div>
    </div>
  );
}
