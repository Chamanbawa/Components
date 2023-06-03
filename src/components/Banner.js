import Button from "./Button";
function Banner(props) {
  return (
    <div className="banner">
      <div className="container banner-center">
        <h2>{props.heading}</h2>
        <p>{props.p1}</p>
        <p>{props.p2}</p>
        <p>{props.p3}</p>
        <Button value="Primary" />
        <Button value="Secondary" />
      </div>
    </div>
  );
}

export default Banner;
