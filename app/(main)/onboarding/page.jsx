import { redirect } from "next/navigation";

import OnboardingForm from "./_components/onboarding-form";
// import { getUserOnboardingStatus } from "@/actions/user";
import { industries } from "@/Data/industries";
import { getUserOnboardingStatus } from "@/action/user";

export default async function OnboardingPage() {
  // Check if user is already onboarded
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    redirect("/dashboard");
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
}