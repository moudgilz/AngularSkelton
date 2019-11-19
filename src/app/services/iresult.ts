/* tslint:disable */

/**
 * IResult data return type
 */
export interface IResult {

  /**
   * operation type property
   */
  operation?: 1 | 2 | 3 | 4;

  /**
   * operation status
   */
  status?: 0 | 1 | 2;

  /**
   * Oparation message if any
   */
  message?: string;

  /**
   * operation body
   */
  body?: {};

  /**
   * Http status code
   */
  statusCode?: 100 | 101 | 102 | 103 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226 | 300 | 300 | 301 | 301 | 302 | 302 | 303 | 303 | 304 | 305 | 306 | 307 | 307 | 308 | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 421 | 422 | 423 | 424 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511;
}
