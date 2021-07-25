import React from "react";
import style from "./styles/imageCarousel.module.scss";
import arrowCarousel from "../../images/arrowCarousel.svg";

class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { index: 0 };
    }

    previousImgClicked = () => {
        const { index } = this.state;
        const { images } = this.props;

        if (index > 0) this.setState({ index: index - 1 });
        else this.setState({ index: images.length - 1 });
    };

    nextImgClicked = () => {
        const { index } = this.state;
        const { images } = this.props;

        if (index < images.length - 1) {
            this.setState({ index: index + 1 });
        } else this.setState({ index: 0 });
    };

    renderIfNavigable(content) {
        const { images, isNavigable } = this.props;

        return isNavigable && images.length > 1 && content;
    }

    renderPreviousButton() {
        return (
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
        );
    }

    renderNextButton() {
        return (
            <button className={style.nextButton} onClick={this.nextImgClicked}>
                <img
                    className={style.nextArrow}
                    src={arrowCarousel}
                    alt=""
                ></img>
            </button>
        );
    }

    render() {
        const { images } = this.props;
        const { index } = this.state;

        return (
            <div className={style.imageCarousel}>
                <div className={style.helperImage} />

                <img className={style.image} src={images[index]} alt="" />

                {this.renderIfNavigable(
                    <>
                        {this.renderPreviousButton()}
                        {this.renderNextButton()}
                    </>
                )}
            </div>
        );
    }
}

export default ImageCarousel;
