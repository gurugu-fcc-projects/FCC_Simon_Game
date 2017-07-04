import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import App from '../components/App';

describe("App component - the static output approach", () => {
  beforeEach(function() {
    this.component = ReactTestUtils.renderIntoDocument(<App />);
    this.renderedDOM = () => ReactDOM.findDOMNode(this.component);
  });

  it("renders a canvas", function() {
    let renderedCanvas = this.renderedDOM().querySelectorAll("canvas");

    expect(this.renderedDOM().children.length).toEqual(1);
    expect(renderedCanvas.length).toEqual(1);
  });

  it("wraps a canvas with a <div> with a proper class name", function() {
    let rootElement = this.renderedDOM();

    expect(rootElement.tagName).toEqual("DIV");
    expect(rootElement.classList.length).toEqual(1);
    expect(rootElement.classList[0]).toEqual("App");
  });
});
