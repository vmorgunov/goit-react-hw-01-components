import { Label, Percentage, Item } from './Statistics.styled';
export default function Statistics({ label, percentage }) {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const color = getRandomHexColor();
  return (
    <Item style={{ backgroundColor: color }}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
}
