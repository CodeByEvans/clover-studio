import Breadcrumbs from "./Breadcrumbs";
import { SectionHeaderProps } from "@/@types/section-header.type";

export const SectionHeader = ({ title, crumbs }: SectionHeaderProps) => {
  return (
    <header className="flex flex-col items-center justify-center gap-4 border-b border-gray-200 pb-12">
      <Breadcrumbs crumbs={crumbs} />
      {/* Section Header */}
      <div className=" text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#8B1E3F] mb-3">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default SectionHeader;
