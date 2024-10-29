import { Suspense, useEffect } from "react";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import Header from "@/components/Header/Header";
import { MainContainer } from "@/components/layout";
import Loader from "@/components/UI/Loader/Loader";
import MenuBurger from "@/components/Header/MenuBurger";
import Footer from "@/components/Footer/Footer";
import { useAuth } from "@/hooks/useAuth";
import { refreshUser } from "@/redux/auth/operations";

function RootLayout() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div style={{ position: "relative" }}>
      <Header />
      <MenuBurger />
      <MainContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContainer>
      <Footer />
    </div>
  );
}

export default RootLayout;
