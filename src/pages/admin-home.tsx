import AdminMenu from "../components/shared/admin-menu";
import HeaderHeadline from "../components/shared/header-headline";
import TopHeader from "../components/shared/top-header";
import UserOpts from "../components/shared/user-opts";
import { Outlet, useLocation } from "react-router-dom";
import AddProductPopup from '../components/admin-home/products/add-product-popup';

export default function AdminHome() {

  const location = useLocation();

  const isAddProductRoute = location.pathname.includes('/addProduct');

  return (
    <section className="flex min-w-screen min-h-screen">
      {isAddProductRoute && <AddProductPopup />}
      <header className="flex flex-col gap-1 pl-10 pt-5 my-[3rem] min-w-[15rem]
        border-r-2 border-white/10">
        <HeaderHeadline />
        <AdminMenu />
        <UserOpts />
      </header>
      <main className="w-screen ml-[5rem] mr-[5rem] mt-[3rem]">
        <TopHeader />
        <Outlet />
      </main>
    </section>
  )
}
