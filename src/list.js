import React, { Component } from "react";
import Shelf from "./shelf";
import { Link } from "react-router-dom";

class List extends Component {
	render() {
		const { books, updateBookCategory } = this.props;
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<Shelf
							name="Currently Reading"
							updateBookCategory={updateBookCategory}
							books={books.filter((book) => book.shelf === "currentlyReading")}
						/>

						<Shelf
							name="Want to Read"
							updateBookCategory={updateBookCategory}
							books={books.filter((object) => object.shelf === "wantToRead")}
						/>

						<Shelf
							name="Read"
							updateBookCategory={updateBookCategory}
							books={books.filter((object) => object.shelf === "read")}
						/>
					</div>
				</div>
				<div>
					<Link to="/search" className="open-search">
						<button>Search</button>
					</Link>
				</div>
			</div>
		);
	}
}
export default List;
