import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Search from "./search";
import List from "./list";
import { Route } from "react-router-dom";
class BooksApp extends React.Component {
	state = {
		books: [],
	};
	//Load books associated to categories on DOM
	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState(() => ({
				books,
			}));
		});
	}
	//update the categories of shelf
	updateBookCategory = (book, shelf) => {
		BooksAPI.update(book, shelf).then((object) => {
			book.shelf = shelf;
			this.setState((currState) => ({
				books: currState.books.filter((x) => x.id !== book.id).concat([book]),
			}));
		});
	};
	render() {
		return (
			<div>
				<Route
					exact
					path="/search"
					render={() => (
						<Search
							books={this.state.books}
							updateBookCategory={this.updateBookCategory}
						/>
					)}
				/>

				<Route
					exact
					path="/"
					render={() => (
						<List
							books={this.state.books}
							updateBookCategory={this.updateBookCategory}
						/>
					)}
				/>
			</div>
		);
	}
}

export default BooksApp;
