import Link from "next/link";
import css from "./SideBar.module.css";
import { getCategories } from "@/lib/api";

export default async function SideBarasync() {
  const categories = await getCategories();

  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </Link>
      </li>
      {categories.map((notes) => (
        <li className={css.menuItem} key={notes.id}>
          <Link href={`/notes/filter/${notes.id}`} className={css.menuLink}>
            {notes.tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}
