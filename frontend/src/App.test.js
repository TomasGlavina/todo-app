import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "./App";
import ToDoList from "./components/Todo";
import Homepage from "./pages/Homepage";

test("renders learn react link", () => {
  render(<App />);
  const headerElement = screen.getByText(/Todo List/i);
  expect(headerElement).toBeInTheDocument();
});

test("list updates", () => {
  render(<Homepage data= { [] }/>)
    expect(screen.getByText('Todo List')).toBeInTheDocument()
})


