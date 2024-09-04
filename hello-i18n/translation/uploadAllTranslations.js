import {GoogleSpreadsheet} from 'google-spreadsheet';
import {createRequire} from 'module';
import {writeGoogleSheet} from "./utils/writeGoogleSheet.js";
const require = createRequire(import.meta.url);

/**
 * 객체를 { key: string, value: string } 스타일의 객체 배열로 변환
 * @param {Record<string, string>} object - 변환할 객체. 문자열 키와 문자열 값의 쌍을 가집니다.
 * @returns {Array<{ key: string, value: string }>} - { key, value } 형태의 객체 배열.
 */
const obj2Records = (object) => {
    const keys = Object.keys(object)

    return keys.reduce((sum, key) => {
        return [...sum, { key, value: object[key] }]
    }, [])
}

/**
 * 번역물을 업로드 한다
 * @param {GoogleSpreadsheet} doc
 * @returns {Promise<boolean>}
 */
export const uploadAllTranslations = async ({doc} = {}) => {
    return await Promise.all([
        await writeGoogleSheet({
            title: 'ko',
            doc,
            records: obj2Records(require('../public/locales/ko/translation.json'))
        }),
        await writeGoogleSheet({
            title: 'en',
            doc,
            records: obj2Records(require('../public/locales/en/translation.json'))
        }),
        await writeGoogleSheet({
            title: 'ja',
            doc,
            records: obj2Records(require('../public/locales/ja/translation.json'))
        }),
        await writeGoogleSheet({
            title: 'zh',
            doc,
            records: obj2Records(require('../public/locales/zh/translation.json'))
        })
    ]).then(res => res.includes(false))
}
