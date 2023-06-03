function Gallery(props) {
  return props.link.map((item) => (
    <img className="gallery-div" src={item} alt="Image" />
  ));
}

export default Gallery;
