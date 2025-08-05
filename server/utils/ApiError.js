/**
 * A standardized error class for creating consistent API error responses.
 * Inherits from the built-in Error class.
 */
class ApiError extends Error {
  /**
   * @param {number} statusCode - The HTTP status code for the error.
   * @param {string} [message="Something went wrong"] - A descriptive error message.
   * @param {Array} [errors=[]] - An array of specific validation errors.
   * @param {string} [stack=""] - The error stack trace.
   */
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
