import Statistics from './Statistics';
import PropTypes from 'prop-types';
import { Section, Title, StatisticList } from './Statistics.styled';

export default function StatisticsList({ stats }) {
  return (
    <Section>
      <Title>Upload stats</Title>

      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <Statistics key={id} label={label} percentage={percentage} />
        ))}
      </StatisticList>
    </Section>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
