import React from 'react';
import { FormGroup } from 'uniforms-antd';
import { mount } from 'enzyme';

test('FormGroup should be deprecated', () => {
  console.error = jest.fn();

  mount(<FormGroup />);

  expect(console.error).toHaveBeenCalledTimes(1);
});
