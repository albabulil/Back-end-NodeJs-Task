/**
 * Request Helper
 *
 * @author ulil albab
 * @copyright	Copyright (c) 2020, https://github.com/albabulil
 */

import { Request, Response } from 'express';

/**
 * Get a address IP.
 * @memberof middleware
 * @param {string} req - request headers.
 * @return {getIpFn} request address IP
 */
export function getIp(req: Request): string {
	return req.ip || (req.connection && req.connection.remoteAddress) || '-';
}

/**
 * Get a address URL.
 * @memberof middleware
 * @param {string} req - request headers.
 * @return {getUrlFn} request adress domail url
 */
export function getUrl(req: Request): string {
	return req.originalUrl || req.url || req.baseUrl || '-';
}

/**
 * Get a path.
 * @memberof middleware
 * @param {string} req - request headers.
 * @return {getPathFn} path url
 */
export function getPath(req: Request): string {
	return getUrl(req).split('?')[0];
}

/**
 * Get a
 * @memberof middleware
 * @param {string} req - request headers.
 * @return {getActionFn} path url
 */
export function getAction(req: Request): string {
	return getUrl(req).split('/')[1];
}

/**
 * Get a http version
 * @memberof middleware
 * @param {string} req - request headers.
 * @return {getHttpVersionFn} http version
 */
export function getHttpVersion(req: Request): string {
	return req.httpVersionMajor + '.' + req.httpVersionMinor;
}

/**
 * Get a header reponse
 * @memberof middleware
 * @param {string} res - respnse headers.
 * @param {string} field- field.
 * @return {getResponseHeaderFn} response header
 */
export function getResponseHeader(res: Response, field: string) {
	if (!res.headersSent) {
		return undefined;
	}

	const header = res.getHeader(field);

	return Array.isArray(header) ? header.join(', ') : header || '-';
}

/**
 * Get a referer
 * @memberof middleware
 * @param {string} req - request headers.
 * @return {getActionFn} referer
 */
export function getReferrer(req: Request) {
	const referer = req.headers.referer || req.headers.referrer || '-';

	if (typeof referer === 'string') {
		return referer;
	}

	return referer[0];
}

/**
 * Get a origin
 * @memberof middleware
 * @param {string} req - request headers.
 * @return {getActionFn} origin
 */
export function getOrigin(req: Request) {
	const origin = req.headers.origin;

	if (!origin || typeof origin === 'string') {
		return origin as string;
	}

	return origin[0];
}

/**
 * Get a methode request
 * @memberof middleware
 * @param {string} req - request headers.
 * @return {getMethodFn} the method
 */
export function getMethod(req: Request) {
	return req.method;
}

/**
 * Get a user agent
 * @memberof middleware
 * @param {string} req - request headers.
 * @return {getUserAgentFn} the user agent
 */
export function getUserAgent(req: Request) {
	return req.headers['user-agent'] || '-';
}

/**
 * Get a body request
 * @memberof middleware
 * @param {string} req - request headers.
 * @return {getbodyParserFn} The body requeest
 */
export function getbodyParser(req: Request) {
	return JSON.stringify(req.body);
}
/**
 * Get a body request
 * @memberof middleware
 * @param {string} req - request headers.
 * @return {getHeaderFn} The body requeest
 */
export function getHeader(req: Request, field: string) {
	const header = req.headers[field];

	return Array.isArray(header) ? header.join(', ') : header || '-';
}
