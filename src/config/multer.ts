import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const config = {
	dest: path.resolve(__dirname, '..', '..', 'tmp'),
	storage: multer.diskStorage({
		destination: (request, file, callback) => {
			callback(null, path.resolve(__dirname, '..', '..', 'tmp'));
		},
		filename: (request, file, callback) => {
			crypto.randomBytes(16, (error, hash) => {
				if (error) {
					callback(error, file.filename);
				}
				const fileName = `${hash.toString('hex')}-${file.originalname}`;

				callback(null, fileName);
			});
		},
	}),
	limits: {
		fileSize: 2 * 1024 * 1024,
	},
	fileFilter: (request, file, callback) => {
		const allowedMimes = [
			"application/pdf",
			"application/zip",
			"application/vnd.ms-excel",
			"application/vnd.ms-powerpoint",
			"application/vnd.ms-word",
			"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
			"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			"application/vnd.openxmlformats-officedocument.presentationml.presentation",
			"application/json",
			"application/xml",
			"image/jpeg",
			"image/png",
			"image/gif",
			"text/plain",
			"text/html",
			"text/css",
			"text/javascript",
			"audio/mpeg",
			"audio/ogg",
			"video/mp4",
			"video/ogg",
			"video/webm"
		];

		if (allowedMimes.includes(file.mimetype)) {
			callback(null, true);
		} else {
			callback(new Error('Arquivo Inválido.'));
		}
	},
};

export { config };