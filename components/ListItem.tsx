import React from "react";
import { Button } from "./ui/button";

interface ActionButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function ActionButton({
  label,
  onClick,
  disabled = false,
}: ActionButtonProps) {
  return (
    <Button variant="secondary" onClick={onClick} disabled={disabled} size="sm">
      {label}
    </Button>
  );
}

interface ListItemProps {
  title: string;
  actionButton?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export default function ListItem({
  title,
  actionButton,
  children,
  className = "",
}: ListItemProps) {
  return (
    <div
      className={`flex items-start justify-between gap-2 border border-border rounded px-4 py-4 bg-secondary ${className}`}
    >
      <div className="flex-1 min-w-0">
        <div className="font-medium text-text-secondary text-sm mb-1">
          {title}
        </div>
        <div className="text-xs text-muted-foreground truncate">{children}</div>
      </div>
      {actionButton && <div className="ml-3 flex-shrink-0">{actionButton}</div>}
    </div>
  );
}
