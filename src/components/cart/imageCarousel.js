import React from "react";
import styles from "./styles/imageCarousel.module.scss";
import arrowCarousel from "../../images/arrowCarousel.svg";

class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { index: 0 };
    }
    previousImgClicked = () => {
        if (this.state.index > 0)
            this.setState({ index: this.state.index - 1 });
        else this.setState({ index: this.props.images.length - 1 });
    };
    nextImgClicked = () => {
        if (this.state.index < this.props.images.length - 1) {
            this.setState({ index: this.state.index + 1 });
        } else this.setState({ index: 0 });
    };
    render() {
        return (
            <div className={styles.imageCarousel}>
                <div className={styles.helperImage} />
                <img
                    className={styles.image}
                    src={this.props.images[this.state.index]}
                    alt=""
                ></img>

                {this.props.isNavigable ? (
                    <button
                        className={styles.previousButton}
                        onClick={this.previousImgClicked}
                    >
                        <img
                            className={styles.previousArrow}
                            src={arrowCarousel}
                        ></img>
                    </button>
                ) : null}
                {this.props.isNavigable ? (
                    <button
                        className={styles.nextButton}
                        onClick={this.nextImgClicked}
                    >
                        <img
                            className={styles.nextArrow}
                            src={arrowCarousel}
                        ></img>
                    </button>
                ) : null}
            </div>
        );
    }
}

export default ImageCarousel;
