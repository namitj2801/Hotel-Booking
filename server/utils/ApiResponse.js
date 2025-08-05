/**
 * A standardized class for creating consistent API responses.
 */
class ApiResponse {
  /**
   * @param {number} statusCode - The HTTP status code of the response.
   * @param {any} data - The data payload to be included in the response.
   * @param {string} [message="Success"] - A descriptive message for the response.
   */
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export default ApiResponse;
