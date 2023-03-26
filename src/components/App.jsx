import { Profile } from './Task1/Profile.jsx';
import user from './Task1/user.json';

import { Statistics } from './Task2/Statistics.jsx';
import data from './Task2/data.json';

import { FriendList } from './Task3/FriendList.jsx'; 
import friends from './Task3/friends.json'

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
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
    </>
  );
};
