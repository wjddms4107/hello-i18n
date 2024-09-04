import {GoogleSpreadsheet} from 'google-spreadsheet';

/**
 * 스프레드 시트 속 시트에 쓴다.
 * @param {string} title
 * @param {GoogleSpreadsheet} doc
 * @param {{ key: string, value: string }} records
 * @returns {Promise<boolean>}
 */
export const writeGoogleSheet = async ({title, doc, records} = {}) => {
    try {
        const sheet = doc.sheetsByTitle[title]
        const rows = await sheet.getRows();

        // 모든 행 삭제
        for (let row of rows) {
            await row.delete(); // 행 삭제
        }
        console.log(`remove all rows from ${title}`);

        // 개발환경의 목록을 기록
        for (let record of records) {
            await sheet.addRow(record);
        }
        console.log(`write all rows from records to ${title}`);

        return true
    } catch (e) {
        return false
    }
}
