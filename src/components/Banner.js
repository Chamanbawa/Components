import Button from "./Button";
function Banner(props) {
  return (
    <div className="banner">
      <div className="container banner-center">
        <h2>{props.heading}</h2>
        <p>{props.p1}</p>
        <p>{props.p2}</p>
        <p>{props.p3}</p>
        <div className="all-btns">
        <Button value="Buy" class="secondary-btn" />
        <Button value="Sale" class="primary-btn" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
