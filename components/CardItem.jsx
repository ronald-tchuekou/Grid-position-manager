import React from 'react';
import PropTypes from 'prop-types';

export default class CardItem extends React.Component {
    card_ref = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            width: 100 / this.props.count_column,
            height: 100 / this.props.count_row,
        };
    }

    componentDidMount() {
        this.setCardStyle();
    }

    componentDidUpdate(props, state) {
        if (
            props.count_column !== this.props.count_column ||
            props.count_row !== this.props.count_row
        ) {
            this.setState(
                {
                    width: 100 / this.props.count_column,
                    height: 100 / this.props.count_row,
                },
                () => {
                    this.setCardStyle();
                }
            );
        }
    }

    setCardStyle() {
        /**
         * @type {HTMLElement}
         */
        var content = this.card_ref.current;
        const { x: left, y: top, width, height } = this.state;
        content.style.top = `${top}px`;
        content.style.left = `${left}px`;
        content.style.width = `${width}%`;
        content.style.height = `${height}%`;
    }

    render() {
        return (
            <div ref={this.card_ref} draggable className="item-container"></div>
        );
    }
}

CardItem.propTypes = {
    count_row: PropTypes.number,
    count_column: PropTypes.number,
};
CardItem.defaultProps = {
    count_row: 10,
    count_column: 5,
};
