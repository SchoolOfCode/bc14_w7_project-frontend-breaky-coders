import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import AddAFlashcard from "../AddAFlashcard";

//AddAFlashcard component: test 1.1 
//verify that AddAFlashcard component shows user a heading with a string "CREATE A FLASHCARD"
test('AddAFlashcard component shows user a heading with a string "CREATE A FLASHCARD"', function () {
  // ARRANGE
  render(<AddAFlashcard />);

  // ACT
    const actual = screen.getByRole("heading", { name: "CREATE A FLASHCARD" });

  // ASSERT
  expect(actual).toBeVisible();
});

//_________________________________________________________


//AddAFlashcard component: test 1.2 
//'AddAFlashcard component shows user a button with a string "Go Back"'
test('AddAFlashcard component shows user a button with a name "Go Back"', function () {
  // ARRANGE
  render(<AddAFlashcard />);

  // ACT
    const actual = screen.getByRole("button", { name: "Go Back" });

  // ASSERT
  expect(actual).toBeVisible();
});

//_________________________________________________________

//AddAFlashcard component: test 1.3 
//'AddAFlashcard component shows user a button with a string "Cancel"'
test('AddAFlashcard component shows user a button with a name "CANCEL"', function () {
  // ARRANGE
  render(<AddAFlashcard />);

  // ACT
  const actual = screen.getByRole("button", { name: "CANCEL" });

  // ASSERT
  expect(actual).toBeVisible();
});

//_________________________________________________________

//AddAFlashcard component: test 1.4 
//'AddAFlashcard component shows user a button with a string "Submit"'
test('AddAFlashcard component shows user a button with a name "SUBMIT"', function () {
  // ARRANGE
  render(<AddAFlashcard />);

  // ACT
  const actual = screen.getByRole("button", { name: "SUBMIT" });

  // ASSERT
  expect(actual).toBeVisible();
});

//_________________________________________________________


//AddAFlashcard component: test 1.2 
// //verify that AddAFlashcard component shows user an input element 'textarea' with a label names "QUESTION"
// test("AddAFlashcard component shows user an input element 'textarea' with a label names 'QUESTION'", function () {
// //   //arrange
//   render(<AddAFlashcard />);
// //   //act
//   const actual = screen.findAllByRole("textbox");
//   //   //assert
//   expect(actual).toBeVisible();
// });

//_________________________________________________________
