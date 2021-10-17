import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { getbodyParser, getIp, getMethod, getOrigin, getReferrer, getUrl, getUserAgent, getResponseHeader, getHttpVersion,getHeader } from '../helper/req.helper';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
	private readonly settings: ILogSettings = {
		"level": "info",
		"silence": [
			"healthz",
			"IntrospectionQuery"
		]
	}

	constructor(private readonly logger: LoggerService) { }

	public use(req: Request, res: Response, next: NextFunction) {
		const operation: string = req.body && req.body.operationName ? req.body.operationName : '';
		const action: string = getUrl(req).split('/')[1];

		if (this.settings.silence.includes(action) || this.settings.silence.includes(operation)) {
			return next();
		}

		const startTime = process.hrtime();

		req.on('error', (error: Error) => {
			this.logMethodByStatus(error.message, error.stack, req.statusCode);
		});

		res.on('error', (error: Error) => {
			this.logMethodByStatus(error.message, error.stack, res.statusCode);
		});

		res.on('finish', () => {
			const diff = process.hrtime(startTime);

			// const msg = {
			// 	statusCode: res.statusCode,
			// 	statusMessage: res.statusMessage,
			// 	url: `${getMethod(req)} ${getUrl(req)}`,
			// 	remoteAddress: getIp(req),
			// 	bodyParse: getbodyParser(req),
			// 	origin: getOrigin(req) || '-',
			// 	referrer: getReferrer(req),
			// 	userAgent: getUserAgent(req),
			// 	getHttpVersion: getHttpVersion(req),
			// 	getHeader: getHeader(req, 'authorization'),
			// 	requestRunTime: `${(diff[0] * 1e3 + diff[1] * 1e-6).toFixed(4)} ms`,
			// }
			const ip = `IP=[${getIp(req)}]`
			const body = `BODY=${getbodyParser(req)|| '{-}'}`
			const origin = `Origin=${getOrigin(req) || '[-]'}`
			const info = `INFO[${res.statusCode} ${getMethod(req)} ${getUrl(req)}]`
			const auth = `Authorization=${getHeader(req, 'authorization') || '[-]'}`
			const protocol = `Protocol=[${getUserAgent(req)} ${(diff[0] * 1e3 + diff[1] * 1e-6).toFixed(4)} ms]`

			const message = `${info}     ${ip} ${protocol} ${origin} ${auth} ${body}`
			this.logMethodByStatus(message, '', res.statusCode);
		});

		return next();
	}

	private logMethodByStatus(message: unknown, stack: string, statusCode: number = 500) {
		const prefix = 'LoggerMiddleware';
		if (statusCode <= 308) {
			return this.logger.info(message, prefix);
		} else if (statusCode <= 418) {
			return this.logger.warn(message, prefix);
		} else {
			return this.logger.error(message, stack, prefix);
		}
	}
}
