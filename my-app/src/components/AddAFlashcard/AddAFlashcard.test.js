import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import AddAFlashcard from "../AddAFlashcard";

//AddAFlashcard component: test 1.1 
//verify that AddAFlashcard component shows user a heading with a string "CREATE A FLASHCARD"
test('AddAFlashcard component shows user a heading with a string "CREATE A FLASHCARD" ', function () {
  // ARRANGE
  render(<AddAFlashcard />);

  // ACT
    const actual = screen.getByRole("heading", { name: "CREATE A FLASHCARD" });

  // ASSERT
  expect(actual).toBeVisible();
});

//_________________________________________________________

// import { expect, test } from "@jest/globals";
// import { render, screen } from "@testing-library/react";
// import App from "./components/App/App";

// //test skeletals

// test("test label", function () {
//   //arrange
//   render(<App />);
//   //act
//   const actual = screen.getByRole("", {});
//   //assert
//   expect(actual).toBe(expected);
// });

//_________________________________________________________
