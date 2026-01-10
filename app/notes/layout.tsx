import SideBar from "../../components/SideBar/SideBar";

export default function NotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="continer">
      {children}
      <aside className="sidebar">
        <SideBar />
      </aside>
    </div>
  );
}
