import { Profile } from './Task1/Profile.jsx';
import user from './Task1/user.json';

export const App = () => {
  return (
     <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
};
