import CanvasFrame from "@/components/layout/CanvasFrame";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <main>
      <CanvasFrame
        profile={profile}
        projects={projects}
        experience={experience}
      />
    </main>
  );
}
