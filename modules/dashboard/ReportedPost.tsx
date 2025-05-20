"use client";

import ListItem, { ActionButton } from "@/components/ListItem";
import ConfirmDialog from "@/components/ConfirmDialog";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReportedPost() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPostIndex, setSelectedPostIndex] = useState<number | null>(
    null
  );
  const router = useRouter();

  const reportedPosts = [
    {
      title: "Post Title",
      detail: "Post details...",
      description: "Post description...",
    },
    {
      title: "Post Title",
      detail: "Post details...",
      description: "Post description...",
    },
    {
      title: "Post Title",
      detail: "Post details...",
      description: "Post description...",
    },
    {
      title: "Post Title",
      detail: "Post details...",
      description: "Post description...",
    },
  ];

  const handleView = (index: number) => {
    setSelectedPostIndex(index);
    setIsDialogOpen(true);
  };

  const handleConfirm = () => {
    setIsDialogOpen(false);
    // Navigate to the post detail page
    router.push(`/dashboard/reported-posts/${selectedPostIndex}`);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
    setSelectedPostIndex(null);
  };

  return (
    <div>
      <h2 className="font-medium text-text-secondary text-base mb-2">
        Reported Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {reportedPosts.map((post, idx) => (
          <ListItem
            key={idx}
            title={post.title}
            actionButton={
              <ActionButton label="View" onClick={() => handleView(idx)} />
            }
          >
            <p>{post.detail}</p>
            <p>{post.description}</p>
          </ListItem>
        ))}
      </div>

      <ConfirmDialog
        isOpen={isDialogOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="View Reported Post"
        description="Do you want to view the details of this reported post?"
        confirmText="View"
      />
    </div>
  );
}
