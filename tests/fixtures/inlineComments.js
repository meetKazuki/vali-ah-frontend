export default () => {
  const parentRef = { current: { innerHTML: '' } };
  const props = {
    inlineComment: {},
    parentRef,
    resetCommentState: jest.fn(),
    updateArticle: jest.fn(),
    createInlineCommentDispatch: jest.fn()
  };
  const currentRange = {
    deleteContents: jest.fn(),
    insertNode: jest.fn(),
    cloneRange: jest.fn(() => currentRange),
    extractContents: jest.fn()
  };

  const documentMock = {
    createElement: jest.fn(() => document),
    appendChild: jest.fn(() => document),
    cloneNode: jest.fn(() => documentMock),
    innerHTML: '',
    style: { },
  };

  const Range = {
    getClientRects: () => [Range],
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
    width: 20,
    height: 20,
    x: 20,
    y: 20
  };

  const windowMock = {
    getSelection: jest.fn(() => windowMock),
    focusOffset: 50,
    anchorOffset: 20,
    getRangeAt: jest.fn(() => windowMock),
    cloneContents: jest.fn(() => windowMock),
    cloneRange: jest.fn(() => Range),
  };

  return {
    props, currentRange, parentRef, documentMock, windowMock
  };
};