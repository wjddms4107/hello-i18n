import {GoogleSpreadsheet} from 'google-spreadsheet';

/**
 * 스프레드 시트 속 시트를 읽어서 객체로 만든다.
 * @param {string} title
 * @param {GoogleSpreadsheet} doc
 * @returns {Promise<Record<string, string>>}
 */
export const readGoogleSheet = async ({title, doc} = {}) => {
    try {
        const sheet = doc.sheetsByTitle[title]
        const rows = await sheet.getRows();

        return rows.reduce((sum, row) => {
            const key = row.get('key');
            const value = row.get('value');

            return {
                ...sum,
                [key]: value
            }
        }, {})
    } catch (e) {
        return {}
    }
}
