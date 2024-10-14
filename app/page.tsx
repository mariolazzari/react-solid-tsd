import { logger } from "@/lib/logger";
import { Users } from "../components/Users";

function HomePage() {
  logger("Users page mounted");

  return (
    <>
      <Users />
    </>
  );
}

export default HomePage;
