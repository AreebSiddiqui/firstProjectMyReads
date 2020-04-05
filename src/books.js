import React, { Component } from "react";
import PropTypes from "prop-types";
class Books extends Component {
	render() {
		const { book, updateBookCategory } = this.props;
		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div
							className="book-cover"
							style={{
								width: 128,
								height: 193,
								backgroundImage: `url(${
									book.imageLinks && (book.imageLinks.thumbnail || "")
								})`,
							}}
						></div>
						<div className="book-shelf-changer">
							<select
								value={book.shelf || "none"}
								onChange={(event) => {
									updateBookCategory(book, event.target.value);
								}}
							>
								<option value="move" disabled>
									Move to...
								</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">{book.title}</div>
					<div className="book-authors">{book.authors}</div>
				</div>
			</li>
		);
	}
}

Books.PropTypes = {
	updateBookCategory: PropTypes.func.isRequired,
};

export default Books;
