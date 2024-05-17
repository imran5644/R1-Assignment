import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



// const users = [
//     {
//       id: '1',
//       username: 'johndoe',
//       email: 'johndoe@example.com',
//       role: 'admin',
//     },
//     {
//       id: '2',
//       username: 'janedoe',
//       email: 'janedoe@example.com',
//       role: 'user',
//     },
//     {
//       id: '3',
//       username: 'mike123',
//       email: 'mike123@example.com',
//       role: 'user',
//     },
//     {
//       id: '4',
//       username: 'susan_smith',
//       email: 'susan_smith@example.com',
//       role: 'admin',
//     },
//     {
//         id: '5',
//         username: 'johndoe',
//         email: 'johndoe@example.com',
//         role: 'admin',
//       },
//       {
//         id: '6',
//         username: 'janedoe',
//         email: 'janedoe@example.com',
//         role: 'user',
//       },
//       {
//         id: '7',
//         username: 'mike123',
//         email: 'mike123@example.com',
//         role: 'user',
//       },
//       {
//         id: '8',
//         username: 'susan_smith',
//         email: 'susan_smith@example.com',
//         role: 'admin',
//       },
//       {
//         id: '9',
//         username: 'johndoe',
//         email: 'johndoe@example.com',
//         role: 'admin',
//       },
//       {
//         id: '10',
//         username: 'janedoe',
//         email: 'janedoe@example.com',
//         role: 'user',
//       },
//       {
//         id: '11',
//         username: 'mike123',
//         email: 'mike123@example.com',
//         role: 'user',
//       },
//       {
//         id: '12',
//         username: 'susan_smith',
//         email: 'susan_smith@example.com',
//         role: 'admin',
//       },
//       {
//         id: '13',
//         username: 'johndoe',
//         email: 'johndoe@example.com',
//         role: 'admin',
//       },
//       {
//         id: '14',
//         username: 'janedoe',
//         email: 'janedoe@example.com',
//         role: 'user',
//       },
//       {
//         id: '15',
//         username: 'mike123',
//         email: 'mike123@example.com',
//         role: 'user',
//       },
//       {
//         id: '16',
//         username: 'susan_smith',
//         email: 'susan_smith@example.com',
//         role: 'admin',
//       },
//   ];
