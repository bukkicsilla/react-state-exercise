import "./Box.css";
const Box = (props) => {
  //const idx = Math.floor(Math.random() * props.colors.length);
  //const color = props.colors[idx];
  return <div className="Box" style={{ backgroundColor: props.color }}></div>;
};
export default Box;
