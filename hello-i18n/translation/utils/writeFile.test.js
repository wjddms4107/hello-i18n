import {writeFile} from "./writeFile.js";

async function main() {
    const done = await writeFile({
        path: '../../public/locales/ko/translation.json',
        value: {
           "1": "1"
        }
    });

    if (done) {
        console.log('쓰기 성공')
    }
}

main()
