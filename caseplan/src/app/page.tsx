import CasePlanTabs from "@/components/CasePlanTabs";

export default function Home() {
  return (
    <main className="d-flex flex-column align-items-center vh-100">
      <h1 className="text-center mt-4">Case Plan</h1>
      <CasePlanTabs />
    </main>
  );
}
