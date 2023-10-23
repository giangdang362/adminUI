import { Rule } from 'antd/lib/form';

export const formItemRule = {
  required: (customMessageId?: string) => {
    return {
      required: true,
      message: 'This field is required',
    } as Rule;
  },

  minLength: (min: number, customMessageId?: string) =>
    ({
      min,
      message: `This field must be at least ${length} characters`,
    } as Rule),

  maxLength: (max: number, customMessageId?: string) => ({
    max,
    message: `This field has a maximum of ${max} characters`,
  }),

  notEmpty: (customMessageId?: string) =>
    ({
      whitespace: true,
      message: 'This field cannot be empty',
    } as Rule),
  email: (customMessageId?: string) =>
    ({
      type: 'email',
      message: 'Invalid email',
    } as Rule),
  pattern: (pattern: RegExp, customMessageId?: string) => ({
    pattern: pattern,
    message: 'Data invalid',
  }),
};
