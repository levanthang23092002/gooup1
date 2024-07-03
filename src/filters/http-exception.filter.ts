import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { I18nService } from 'nestjs-i18n';

@Catch(HttpException)
@Injectable()
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly i18n: I18nService) {}

  async catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const message = exception.message;

    const lang = request.headers['accept-language'] || 'vi';

    const localizedMessage = await this.i18n.translate(message, { lang });
    console.log(message, localizedMessage);

    response.status(status).json({
      statusCode: status,
      message: localizedMessage,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
