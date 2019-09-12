export default {
  inlineComment: (validator) => [
    {
      field: 'comment',
      check: validator.isLength,
      args: [{ min: 3, max: 124 }],
      message: 'comment should be between 8 and 124 characters',
    },
  ],
};