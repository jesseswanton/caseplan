import CasePlanTabs from "./components/CasePlanTabs";

const Page = () => {
  return (
    <main className="d-flex flex-column align-items-center vh-100">
      <h1 className="text-center mt-4">Case Plan</h1>
      <CasePlanTabs />
    </main>
  );
}

export default Page;