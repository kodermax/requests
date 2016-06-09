import React from 'react';
import { HomeView } from 'routes/Home/components/HomeView';
import { render } from 'enzyme';

describe('(View) Home', () => {
  let _component;

  beforeEach(() => {
    _component = render(<HomeView />);
  });

  it('Наличие пункта АХД', () => {
    const welcome = _component.find('h4');
    expect(welcome).to.exist;
    expect(welcome.text()).to.match(/АХД/);
  });
});
