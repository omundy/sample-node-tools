const sharp = require("sharp");
const imageinfo = require("imageinfo");
const fs = require("fs");

const basePath =
	"/Users/owenmundy/Sites/_teaching/_code_web/critical-web-design-book/07-ethical-design/examples/accessibility-data/assets/img/";
const inputPath = basePath + "users/";
const outputPath = basePath + "users-200w/";

// async function expression used as an IIFE
(async () => {
	await loop(inputPath);
	console.log("✅ image resized");
})();

async function loop(filePath) {
	let count = 0;

	fs.readdirSync(filePath)
		.sort()
		.forEach((file) => {
			// console.log(file);

			// make sure we aren't processing a hidden file
			if (/^\..*/.test(file)) return;
			// console.log(filePath, file);

			// double check it is PNG
			fs.readFile(filePath + file, function (err, data) {
				if (err) throw err;
				let info = imageinfo(data);
				console.log(
					`${file}  ${info.mimeType}   ${data.length} bytes   ${info.width} x ${info.height}`
				);

				// make sure type matches
				// if (info.mimeType !== "image/png") return;
				if (info.mimeType !== "image/jpeg") return;

				// EXPORT RESOLUTIONS -> tally-monsters
				resizeAndSave(filePath, file, 200, outputPath);
			});
			// test
			// if (++count > 10) return;
		});
}

/*  IMAGE FUNCTIONS
 ******************************************************************************/

/**
 *	Resize and save an image using height only (width is automatically computed)
 */
function resizeAndSave(sourcePath, file, height, exportPath) {
	// console.log("sourcePath + file",sourcePath + file);
	// console.log("exportPath + file",exportPath + file);

	// create folder if it doesn't exist
	if (!fs.existsSync(exportPath)) {
		fs.mkdirSync(exportPath);
	}

	sharp(sourcePath + file)
		.resize({
			height: height,
		})
		.toFile(exportPath + file, (err, info) => {
			console.log(err, file, JSON.stringify(info));
		});
}
