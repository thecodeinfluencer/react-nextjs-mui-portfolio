import { profile } from "@/utilities/content";
import { Avatar } from "@mui/material";

export default function HeaderAvatar({ imageSize = 240 }) {
  const { name } = profile;

  return (
    <Avatar
      alt="Profile Image"
      src="/cdn/profile.svg"
      imgProps={{ fetchPriority: "high" }}
      sx={{ width: imageSize, height: imageSize, borderRadius: "50%" }}
    >
      {name?.split(" ").map((name) => name?.[0])}
    </Avatar>
  );
}
