import { useState } from "react";
import { Sidebar, Header } from "../components";

export const MainLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-body">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 overflow-y-auto">
        <Header toggleSidebar={toggleSidebar} />
        <main className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          {children}
        </main>
      </div>
    </div>
  );
};
