import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import PropTypes from 'prop-types'
import sortBy from "sort-by";
import Book from "./books";

class Search extends Component {
	state = {
		query: "",
		booksInDB: [],
	};

	updateQuery = (event) => {
		this.setState(
			{
				query: event.target.value,
			},
			this.onSearch
		)
	}

	onSearch() {
		const { query } = this.state;
		const { books } = this.props;

		if (query === "" || query === undefined) {
			return this.setState({ booksInDB: [] });
		}

		if (query.trim()) {
			BooksAPI.search(query).then((response) => {
				if (response.error) {
					this.setState({ booksInDB: [] })
				} else {
						response.forEach((object) => {
							const visible = books.find(({ id }) => id === object.id);
							object.shelf = visible ? visible.shelf : 'none';
						});
					if (response.length !== 0) {
						response.sort(sortBy("title"));
					}
					return this.setState({ booksInDB: response });
				}
			});
		}
	}

	render() {
		return (
			<div className="app">
				<div className="search-books">
					<div className="search-books-bar">
						<Link to="/" className="close-search">
							{" "}
							Close{" "}
						</Link>
						<div className="search-books-input-wrapper">
							<input
								type="text"
								placeholder="Search by title or author"
								onChange={this.updateQuery}
							/>
						</div>
					</div>
					<div className="search-books-results">
						<ol className="books-grid">
							{this.state.booksInDB.map((object) => (
								<Book
									book={object}
									key={object.id}
									updateBookCategory={this.props.updateBookCategory}
								/>
							))}
						</ol>
					</div>
				</div>
			</div>
		);
	}
}

Search.PropTypes = {
	books: PropTypes.array.isRequired,
	updateBookCategory: PropTypes.func.isRequired
}

export default Search;
