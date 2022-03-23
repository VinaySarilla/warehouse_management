import Layout from "../components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <div className="flex justify-around">
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

      <div className="flex gap-2 justify-around mt-4">
        <p>Top Selling Brands </p>
        <p>Top Selling Products</p>
      </div>
      <div className="flex gap-2">
        <table className="w-full text-center my-3 rounded-md bg-slate-50 border-collapse">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Britannia</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Cadbury</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Coca Cola</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Lays</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full text-center my-3 rounded-md bg-slate-50 ">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr className="py-3">
              <td>1</td>
              <td>Marie</td>
            </tr>
            <tr className="py-3">
              <td>2</td>
              <td>Silk</td>
            </tr>
            <tr className="py-3">
              <td>3</td>
              <td>Coke</td>
            </tr>
            <tr className="py-3">
              <td>4</td>
              <td>Cream & Onion</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
