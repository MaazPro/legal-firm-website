import type { Metadata } from "next";
import { FeesAppointments } from "@/components/fees-appointments";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Fees & Appointments",
  description:
    "Information about fees, payment plans, Legal Aid funding assistance and free initial appointments with West Adelaide Legal.",
  alternates: { canonical: "/fees-appointments" },
};

export default function FeesAppointmentsPage() {
  return (
    <>
      <PageHero
        title="Fees & Appointments"
        description="Costs are discussed upfront, and free initial appointments are currently available by telephone."
      />
      <FeesAppointments detailed />
    </>
  );
}
