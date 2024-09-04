import {downloadAllTranslations} from "./downloadAllTranslations.js";

async function main() {
    const done = await downloadAllTranslations()

    if (done) {
        console.log('다운로드 완료')
    }
}

main()
