/**
 * A higher-order function that wraps an asynchronous route handler
 * to catch any errors and pass them to the next Express middleware.
 * @param {Function} requestHandler - The async route handler function.
 * @returns {Function} An Express middleware function.
 */
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
