import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';

class Pagination extends React.Component {
    state = {
        isActive: this.props.isActive || false,
        presentPage: this.props.presentPage || 1,
        leftArrowIsHidden: true,
        rightArrowIsHidden: false
    };

    componentDidMount() {
        const {presentPage, pages} = this.props;
        this.setArrows(presentPage, pages);
    }

    componentWillReceiveProps(nextProps, nextContext) {

        if (nextProps.presentPage) {
            this.setArrows(nextProps.presentPage, nextProps.pages);
        }
    }

    setArrows = (presentPage, pages) => {
        presentPage > 1 ? this.setState({leftArrowIsHidden: false}) :
            this.setState({leftArrowIsHidden: true});
        presentPage < pages ? this.setState({rightArrowIsHidden: false}) :
            this.setState({rightArrowIsHidden: true});
    };

    changePage = async (newPage, isUp) => {
        const {onPageChange} = this.props;
        const {presentPage} = this.state;

        if (newPage) {
            await this.setState({presentPage: newPage});

        } else {
            await isUp ? this.setState({presentPage: presentPage + 1}) :
                this.setState({presentPage: presentPage - 1});
        }
        onPageChange(this.state.presentPage);
    };

    render() {
        const {pages} = this.props;
        const {presentPage, leftArrowIsHidden, rightArrowIsHidden, isActive} = this.state;
        const {changePage} = this;

        return (
            <div hidden={!isActive} className="pagination">
                <ul className="pagination__list">
                    <li className="pagination__list__item"
                        hidden={leftArrowIsHidden}
                        onClick={() => changePage(null,false)}>{"<"}</li>
                    {[...Array(pages)].map((el, page) =>
                        <li
                            key={page++}
                            className={`pagination__list__item${presentPage === page ? " pagination__list__item--active" : ""}`}
                            onClick={() => changePage(page, null)}>
                            {page}
                        </li>
                    )}
                    <li className="pagination__list__item"
                        hidden={rightArrowIsHidden}
                        onClick={() => changePage(null,true)}>{">"}</li>
                </ul>
            </div>
        )
    }
}

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    presentPage: PropTypes.number,
    isActive: PropTypes.bool
};

export default Pagination;
