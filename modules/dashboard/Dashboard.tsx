import Summary from "@/components/Summary";
import PendingSuppliers from "./PendingSuppliers";
import PendingEvents from "./PendingEvents";
import ReportedPost from "./ReportedPost";

export default function Dashboard() {
  const mockSummaryData = [
    {
      title: "Submissions",
      value: 8,
    },
    {
      title: "Total Users",
      value: 150,
    },
    {
      title: "Active Posts",
      value: 24,
    },
    {
      title: "Reported Content",
      value: 2,
    },
  ];

  return (
    <div className="p-6 bg-background">
      <Summary summary={mockSummaryData} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Pending Suppliers */}
        <PendingSuppliers />

        {/* Pending Events */}
        <PendingEvents />
      </div>

      {/* Reported Posts */}
      <div className="mt-8">
        <ReportedPost />
      </div>
    </div>
  );
}
