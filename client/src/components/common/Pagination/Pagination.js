import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';

class Pagination extends React.Component {
    state = {
        presentPage: this.props.initialPage || 1,
        leftArrowIsHidden: true,
        rightArrowIsHidden: false
    };

    changePage = async newPage => {
        const {onPageChange} = this.props;
        const {checkArrows} = this;
        await this.setState({presentPage: newPage});
        onPageChange(newPage);
        checkArrows();
    };

    changePageWithArrow = async isUp => {
        const {presentPage} = this.state;
        const {checkArrows} = this;
        await isUp ? this.setState({presentPage: presentPage + 1}) :
            this.setState({presentPage: presentPage - 1});
        checkArrows();
    };

    checkArrows = () => {
        const {presentPage} = this.state;
        const {pages} = this.props;
        presentPage > 1 ? this.setState({leftArrowIsHidden: false}) :
            this.setState({leftArrowIsHidden: true});
        presentPage < pages ? this.setState({rightArrowIsHidden: false}) :
            this.setState({rightArrowIsHidden: true});
    };

    render() {
        const {pages} = this.props;
        const {presentPage, leftArrowIsHidden, rightArrowIsHidden} = this.state;
        const {changePage, changePageWithArrow} = this;
        return (
            <div className="pagination">
                <ul className="pagination__list">
                    <li className="pagination__list__item"
                        hidden={leftArrowIsHidden}
                        onClick={() => changePageWithArrow(false)}>{"<"}</li>
                    {[...Array(pages)].map((el, page) =>
                        <li
                            key={page++}
                            className={`pagination__list__item${presentPage === page ? " pagination__list__item--active" : ""}`}
                            onClick={() => changePage(page)}>
                            {page}
                        </li>
                    )}
                    <li className="pagination__list__item"
                        hidden={rightArrowIsHidden}
                        onClick={() => changePageWithArrow(true)}>{">"}</li>
                </ul>
            </div>
        )
    }
}

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    initialPage: PropTypes.number
};

export default Pagination;
