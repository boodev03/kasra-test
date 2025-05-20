import React from "react";
import { Construction } from "lucide-react";

export default function UnderDeveloping() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <Construction className="w-16 h-16 text-muted-foreground" />
      <h2 className="text-2xl font-semibold text-muted-foreground">
        Under Development
      </h2>
      <p className="text-muted-foreground">
        This feature is currently being developed. Please check back later.
      </p>
    </div>
  );
}
