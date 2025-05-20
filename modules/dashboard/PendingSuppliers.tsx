"use client";
import ListItem, { ActionButton } from "@/components/ListItem";
import ConfirmDialog from "@/components/ConfirmDialog";
import { useState } from "react";
import { toast } from "sonner";

export default function PendingSuppliers() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const pendingSuppliers = [
    { name: "Supplier Name", detail: "Supplier details..." },
    { name: "Supplier Name", detail: "Supplier details..." },
  ];

  const handleApprove = (index: number) => {
    setIsDialogOpen(true);
  };

  const handleConfirm = () => {
    setIsDialogOpen(false);
    toast.success("Supplier approved successfully");
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <h2 className="font-medium text-text-secondary text-base mb-2">
        Pending Suppliers
      </h2>
      <div className="flex flex-col gap-3">
        {pendingSuppliers.map((supplier, idx) => (
          <ListItem
            key={idx}
            title={supplier.name}
            actionButton={
              <ActionButton
                label="Approve"
                onClick={() => handleApprove(idx)}
              />
            }
          >
            <p> {supplier.detail} </p>
          </ListItem>
        ))}
      </div>

      <ConfirmDialog
        isOpen={isDialogOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Approve Supplier"
        description="Are you sure you want to approve this supplier?"
        confirmText="Approve"
      />
    </div>
  );
}
