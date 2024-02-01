const glob = require('glob');
const fs = require('fs-extra');
const path = require('path');

const sourceDir = 'public/assets'; // путь к вашим изображениям
const targetDir = 'build/static/images'; // путь, куда вы хотите скопировать изображения

const copyImages = () => {
	glob.sync(`${sourceDir}/**/*.{png,jpg,jpeg,gif}`, { nodir: true }).forEach(
		(file) => {
			const relativePath = path.relative(sourceDir, file);
			const targetPath = path.join(targetDir, relativePath);
			fs.copySync(file, targetPath);
		}
	);

	console.log('Images copied successfully!');
};

copyImages();
