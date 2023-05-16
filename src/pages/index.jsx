import { Inter } from "next/font/google";

import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout pagina="inicio">
      <h1 className="heading">Desde inicio</h1>
    </Layout>
  );
}
