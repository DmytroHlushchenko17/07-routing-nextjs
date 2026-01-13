import css from "./Notes.client.module.css";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { NoteTag } from "@/types/note";
import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";

const PER_PAGE = 12;
type Props = {
  params: Promise<{ slug: string[] }>;
};

const NoteDetails = async ({ params }: Props) => {
  const { slug } = await params;
  const tag = slug?.[0] === "all" ? undefined : (slug?.[0] as NoteTag);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", 1, PER_PAGE],
    queryFn: () => fetchNotes({ page: 1, perPage: PER_PAGE, tag }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className={css.app}>
        <NotesClient tag={tag} />
      </div>
    </HydrationBoundary>
  );
};

export default NoteDetails;
