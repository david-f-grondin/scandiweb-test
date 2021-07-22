import React from "react";
import style from "./styles/imageCarousel.module.scss";
import arrowCarousel from "../../images/arrowCarousel.svg";

class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { index: 0 };
    }

    previousImgClicked = () => {
        const index = this.state.index;
        const images = this.props.images;

        if (index > 0) this.setState({ index: index - 1 });
        else this.setState({ index: images.length - 1 });
    };

    nextImgClicked = () => {
        const index = this.state.index;
        const images = this.props.images;

        if (index < images.length - 1) {
            this.setState({ index: index + 1 });
        } else this.setState({ index: 0 });
    };

    render() {
        const { images, isNavigable } = this.props;
        const { index } = this.state;

        return (
            <div className={style.imageCarousel}>
                <div className={style.helperImage} />
                <img className={style.image} src={images[index]} alt=""></img>

                {isNavigable && images.length > 1 && (
                    <button
                        className={style.previousButton}
                        onClick={this.previousImgClicked}
                    >
                        <img
                            className={style.previousArrow}
                            src={arrowCarousel}
                            alt=""
                        ></img>
                    </button>
                )}
                {isNavigable && images.length > 1 && (
                    <button
                        className={style.nextButton}
                        onClick={this.nextImgClicked}
                    >
                        <img
                            className={style.nextArrow}
                            src={arrowCarousel}
                            alt=""
                        ></img>
                    </button>
                )}
            </div>
        );
    }
}

export default ImageCarousel;
