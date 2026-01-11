type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: Props) => {
  return (
    <section className="container">
      <aside className="sidebar">{sidebar}</aside>
      <div className="notesWrapper">{children}</div>
    </section>
  );
};

export default NotesLayout;
