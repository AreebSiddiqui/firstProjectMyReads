import React from "react";
import Book from "./books";

function Shelf(props) {
	const { books, name, updateBookCategory } = props;

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{name}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{books.map((book) => (
						<Book
							book={book}
							key={book.id}
							updateBookCategory={updateBookCategory}
						/>
					))}
				</ol>
			</div>
		</div>
	);
}

export default Shelf;
