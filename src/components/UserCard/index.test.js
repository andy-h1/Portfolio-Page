import React from 'react';
import { render } from '@testing-library/react';
import { UserCard } from '.';

const props = {
  age: 25,
  email: 'test@gmail.com',
  id: '1234testid',
  name: 'usernameTest'
};

describe('User Card component', () => {
  it('should render', () => {
    const { container } = render(<UserCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
