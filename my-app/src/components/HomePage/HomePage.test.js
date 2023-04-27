import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import App from "../App/App";


//test skeletals

test('Verify the user can see a bear logo on homepage', function() {
//arrange
render(<App />);
//act
const actual = screen.getByRole('img', {alt: "bearTitleImage"});
//assert
expect(actual).toBeVisible()
});


test('Verify "Tell me another" button is visible', function () {
  render(<App />);
const actual = screen.getByRole('button', {name: "Add A Flashcard"});
expect(actual).toBeInTheDocument(); 
});

test('Verify "My Flashcards" button is visible', function () {
    render(<App />);
  const actual = screen.getByRole('button', {name: "My Flashcards"});
  expect(actual).toBeInTheDocument(); 
  });

  test('Verify "Test Me" button is visible', function () {
    render(<App />);
  const actual = screen.getByRole('button', {name: "Test Me"});
  expect(actual).toBeInTheDocument(); 
  });