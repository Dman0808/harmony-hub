import { MusicHubWrapper } from "./MusicHub.styled";
import { useAuth } from "@/hooks";

function Playlist() {
  const { user } = useAuth();

  return <MusicHubWrapper>{user.name}</MusicHubWrapper>;
}

export default Playlist;
