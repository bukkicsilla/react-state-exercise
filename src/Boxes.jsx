import Box from "./Box";
import "./Boxes.css";
const Boxes = () => {
  const colors = [
    "gold",
    "skyblue",
    "pink",
    "purple",
    "blue",
    "forestgreen",
    "yellow",
    "red",
    "orange",
    "indigo",
    "magenta",
  ];
  return (
    <div className="Boxes">
      <Box colors={colors} />
      <Box colors={colors} />
      <Box colors={colors} />
      <Box colors={colors} />
      <Box colors={colors} />
      <Box colors={colors} />
      <Box colors={colors} />
      <Box colors={colors} />
      <Box colors={colors} />
      <Box colors={colors} />
      <Box colors={colors} />
      <Box colors={colors} />
      <Box colors={colors} />
      <Box colors={colors} />
      <Box colors={colors} />
      <Box colors={colors} />
      <button className="Boxes-btn">Change</button>
    </div>
  );
};

export default Boxes;
