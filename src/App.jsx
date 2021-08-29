import user from './components/SocialProfile/User.json';
import StatisticalData from './components/Statistic/StatisticalData.json';
import friends from './components/FriendList/Friends.json';
import transactions from './components/Transactions/transactions.json';

import Profile from './components/SocialProfile/SocialProfile';
import StatisticsItem from './components/Statistic/StatisticsList';
import FriendsList from './components/FriendList/FriendList';
import TransactionHistory from './components/Transactions/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        key={user.tag}
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsItem stats={StatisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
