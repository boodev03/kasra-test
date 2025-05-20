"use client";

import ListItem, { ActionButton } from "@/components/ListItem";
import ConfirmDialog from "@/components/ConfirmDialog";
import { useState } from "react";
import { toast } from "sonner";

export default function PendingEvents() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEventIndex, setSelectedEventIndex] = useState<number | null>(
    null
  );

  const pendingEvents = [
    { name: "Event Name", detail: "Event details...", action: "Approve" },
    { name: "Event Name", detail: "Event details...", action: "Reject" },
  ];

  const handleAction = (index: number) => {
    setSelectedEventIndex(index);
    setIsDialogOpen(true);
  };

  const handleConfirm = () => {
    setIsDialogOpen(false);
    const event = pendingEvents[selectedEventIndex!];
    toast.success(`Event ${event.action.toLowerCase()}d successfully`);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
    setSelectedEventIndex(null);
  };

  return (
    <div>
      <h2 className="font-medium text-text-secondary text-base mb-2">
        Pending Events
      </h2>
      <div className="flex flex-col gap-3">
        {pendingEvents.map((event, idx) => (
          <ListItem
            key={idx}
            title={event.name}
            actionButton={
              <ActionButton
                label={event.action}
                onClick={() => handleAction(idx)}
              />
            }
          >
            <p>{event.detail}</p>
          </ListItem>
        ))}
      </div>

      <ConfirmDialog
        isOpen={isDialogOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title={`${pendingEvents[selectedEventIndex!]?.action} Event`}
        description={`Are you sure you want to ${pendingEvents[
          selectedEventIndex!
        ]?.action.toLowerCase()} this event?`}
        confirmText={pendingEvents[selectedEventIndex!]?.action}
        variant={
          pendingEvents[selectedEventIndex!]?.action === "Reject"
            ? "destructive"
            : "default"
        }
      />
    </div>
  );
}
