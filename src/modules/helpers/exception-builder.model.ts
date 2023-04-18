import { HttpException, HttpStatus } from '@nestjs/common';

export class IException extends HttpException {
  errorMessage?: string;
  statusCode?: HttpStatus;
  errorCode?: string;

  constructor(statusCode: HttpStatus, errorMessage: string) {
    super(
      {
        statusCode,
        message: errorMessage,
      },
      statusCode,
    );
  }

  public static ofValidation(
    errorCode?: string,
    errorMessage?: string,
  ): HttpException {
    return new HttpException(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        message: errorMessage,
        errorCode,
      },
      HttpStatus.BAD_REQUEST,
    );
  }

  public static ofError(
    errorCode?: string,
    errorMessage?: string,
  ): HttpException {
    return new HttpException(
      {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: errorMessage,
        errorCode,
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
