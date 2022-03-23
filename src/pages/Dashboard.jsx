import Layout from "../components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <div className="flex gap-6">
        <div className="h-20 w-36 bg-green-50 rounded-lg text-green-500 text-center p-2">
          <p className="text-4xl">50</p>
          <p className="text-sm">Orders</p>
        </div>
        <div className="h-20 w-36 bg-green-50 rounded-lg text-green-500 text-center p-2">
          <p className="text-4xl">50</p>
          <p className="text-sm">Vendors</p>
        </div>
        <div className="h-20 w-36 bg-green-50 rounded-lg text-green-500 text-center p-2">
          <p className="text-4xl">50</p>
          <p className="text-sm">Products</p>
        </div>
        <div className="h-20 w-36 bg-green-50 rounded-lg text-green-500 text-center p-2">
          <p className="text-4xl">50</p>
          <p className="text-sm">Employee</p>
        </div>
      </div>
    </Layout>
  );
}
