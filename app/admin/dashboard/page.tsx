import { UserButton } from "@clerk/nextjs";
import { initialProfile } from "@/lib/initial-provider";

export default async function AdminDashboard() {
  const profile = await initialProfile();
  return <UserButton afterSignOutUrl="/" />;
}
