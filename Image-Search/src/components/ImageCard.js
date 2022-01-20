import React from 'react';

class ImageCard extends React.Component {
   // Constructor.
   constructor(props) {
      super(props);
      this.state = { spans: 0 };
      this.imageRef = React.createRef();
   }

   // Listner to see when the images have loaded.
   componentDidMount() {
      this.imageRef.current.addEventListener('load', this.setSpans);
   }

   // Ran after the images have loaded to set the spans for the images.
   setSpans = () => {
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil((height / 10) + 1);
      this.setState({ spans });
   }

   render() {
      const { description, urls } = this.props.image;
      return (
         <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
            <img className='image-card' ref={this.imageRef} alt={description} src={urls.regular} />
         </div>
      );
   }
}

export default ImageCard;