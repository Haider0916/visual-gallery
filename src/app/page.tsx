import { Suspense } from "react";
import UploadFile from "./components/fileupload";
import Gallery from "./components/gallery";

export default function Home() {

  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <UploadFile />
      </Suspense>
    </main>
  );
}
