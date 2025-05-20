import { Fragment } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

export interface SummaryItemProps {
  title: string;
  value: number | string;
  titleClassName?: string;
}

function SummaryItem({ title, value, titleClassName }: SummaryItemProps) {
  return (
    <div className="flex flex-col items-center xlg:items-start gap-[2px]">
      <div className="flex items-center gap-2">
        <p className="text-dark font-poppins font-bold text-xl sm:text-2xl md:text-3xl leading-[28px] sm:leading-[30px] md:leading-[34px] text-center md:text-left">
          {value}
        </p>
      </div>
      <p
        className={cn(
          "text-text text-sm leading-[18px] sm:leading-[20px] md:leading-[22px] text-center md:text-left font-medium",
          titleClassName
        )}
      >
        {title}
      </p>
    </div>
  );
}

function SummaryItemSkeleton() {
  return (
    <div className="flex flex-col items-center xlg:items-start gap-[2px]">
      <Skeleton className="h-8 w-16 mb-1" />
      <Skeleton className="h-5 w-24" />
    </div>
  );
}

interface SummaryProps {
  summary: SummaryItemProps[];
  isLoading?: boolean;
}

export default function Summary({ summary, isLoading = false }: SummaryProps) {
  return (
    <div className="flex flex-wrap items-center px-4 sm:px-8 md:px-12 py-3 my-8 bg-secondary rounded-[4px] border border-border shadow-common w-full">
      <div className="grid grid-cols-1 divide-gray-300 sm:grid-cols-2 lg:grid-cols-4 xl:flex xl:flex-nowrap w-full gap-4 xlg:gap-0 justify-between">
        {isLoading ? (
          // Show skeletons when loading
          <>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Fragment key={item}>
                <div className="w-auto">
                  <SummaryItemSkeleton />
                </div>
                {item !== 6 && (
                  <div className="hidden xlg:block w-[1px] h-[60px] bg-[#E2E8F0]" />
                )}
              </Fragment>
            ))}
          </>
        ) : (
          // Show actual data when not loading
          <>
            {summary.map((item, index) => (
              <Fragment key={index}>
                <div className="w-auto">
                  <SummaryItem {...item} />
                </div>
                {index !== summary.length - 1 && (
                  <div className="hidden xlg:block w-[1px] h-[60px] bg-[#E2E8F0]" />
                )}
              </Fragment>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
