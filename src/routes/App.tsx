//Modules
import { useQueryURL } from "../hooks/useQueryURL";

//Component
import { Profile } from "../components/Profile";
import { SignIn } from "../components/SignIn";

const App = () => {
  const url = useQueryURL();
  const username = url.get("user") || "";

  const isProfile = Boolean(username);
  const handleSearchProfile = (username: string) => {
    window.location.search += `?user=${username}`
  };

  return (
    (!isProfile) ? (
      <SignIn
        onSubmit={handleSearchProfile}
      />
    ) : (
      <Profile
        username={username}
      />
    )
  );
};

export default App;