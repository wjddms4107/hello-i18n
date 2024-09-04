import fs from 'node:fs/promises'

/**
 * 번역물을 기록한다
 * @param {PathLike} path
 * @param {Record<string, string>} value
 * @returns {Promise<boolean>}
 */
export const writeFile = async ({value, path} = {}) => {
    try {
        const jsonString = JSON.stringify(value, null, 2);
        await fs.writeFile(path, jsonString);
        console.log(`Successfully wrote file to ${path}`);
        return true
    } catch (err) {
        console.error(`Error writing file to ${path}`, err);
        return false
    }
}
