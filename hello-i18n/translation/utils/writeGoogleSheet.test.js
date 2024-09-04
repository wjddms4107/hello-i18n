import {writeGoogleSheet} from "./writeGoogleSheet.js";
import {connectGoogleSpreadSheet} from "./connectGoogleSpreadSheet.js";

async function main() {
    const doc = await connectGoogleSpreadSheet({
        spreadsheetDocId: '1x1IggiPa8ziUlCYbSLGNPS9bA7NyBggLef_5R0NAIqM',
        sheetId: '0',
        client_email: 'i18n-962@elegant-tangent-434606-p5.iam.gserviceaccount.com',
        private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCz2JFZpCJpjvuq\ngX7ZZ6vSZCWp4F4F4ByIr7q7q+ivu3DPdqxYwcLV/tBaxl+k2lHhFUp5LoAjc6ZO\n09aCTGb+ywOl9/kTbEIe38PJx3dehXbxlD/q1wObKRWWq9iA4J+SoZK/qqHhxt10\niAqgfIHKMxJUWK0V5OW77BG4TXY7inD21rLbPyIDTMzilLonSaA0Q8RvtaeWF4rn\nCeNL8jOEPhJFBWIn6l2mmuBbcu1qbtSz9eKX5MJOGd8yD3zRj/TCHm1XulXkZuS6\n2ihd1EysdFVQY5LJO37JHFhQTnrVugkyAZUAEEnvIYsY3OF8AxE3ZeGxtUNNVzfs\n95te5kfnAgMBAAECggEADRMfCgnNOKhc8nnkm3CWhL6kIFP/8eRnnqZL6I3oZjI1\n0tdZU0CO5hjW0+qdFHKMxlTSa7nuNeWX/x4Wd7WPPVHMC5paAMf7jJwO81HtgzEn\nwwtYlD2adQLJH4GRxVjPMQ1PCmEg0LWw7uJfB2jV1LneyMQDnVZdP0q7xQ7YnB5m\nrvWQVwt80MTc9yPiDdNIMzIKGb4RlthR/jsnpbYLC+HnHU87wLek0S46tFuk6rUO\nCHCOp3SUu/hRoF0sd3N4iW7LsKd++tuvME0E1IlxXdhScQ0dKAoRvIeywMGGJS6B\nLxrN/8UxfURemZKRv9obOLoMT0S+SAT9USIPCmtRZQKBgQDl9V67BKpejd70j+nw\n1BhEh9p3GpyH2T+k3QCeFt9UCc2KLH2fMEiabhZaEpxUqNekfOV/qvcWhggkZs4V\nzVAO3ecZ1iKX2AIHNYVMzOJeQ51TjijpDblhA22Y4PJxyAEnY3zvC8/eRJLHFX8k\nWwK7To/mO1UQWqZmgRpr/pxI6wKBgQDINmgunF+GHH7B8aM6EVPn1M3Q/ADmhOM+\nlaylJpVDeaLngppZXLtWKCd4GEz6QjJSqCKtPAHj9Elql08BYNS7lW3UVAvEQxwj\nZf7NB273xSOciW7MKmV2h65NgGCUty5Kd+DDlSNPung0t2ig+m4vH/nYd3lzJGCG\nuqPRdL299QKBgGlwwsj58Kx+XLbCrj/w4Fe7+x4Vo6RepuIPO9NBJZHBFO/ASrGN\nUB0PUUxnsCrZaFdRtWF+oOFA/8bBJMm2ZHkMooSkPSRmtTddAQwf/cO/OQow6u1B\nj7i9+6jXrBMj4/ONmKF7RwrhYnPKlYuz92KvOSgWGIDxL89cbyMJkduVAoGBAKj0\nSNy0t2PMXie6i30wLDdifMEUOIpPsBkbY9MGiUWkuxVVQH2S5MBjKFOPZj52aFMa\nchDwp8O/XckmoNRP65XVFxbsSfW4kGFK7EgHMtzCLzglPivqxy7MdwoOAPLe1qCf\nIzzJeUAJ4vDRqejXDO6VtFi5EfNZyl9H14ClXI2VAoGAASwg2d2R05wdEjEU1VAE\nJJ/o8Cno5tkxPNQqAiT68Y4rxPsTVBC4mMWJIXeWUFblLTwREm8wLOH0BHYv0V3w\nW6T7/xw5Z7oBOkRSe0rJvqCf937Hvm114Jzb5XVPcHiFW0B38+PgDYSNQIAfhyho\nXN9o3VyobGCXP+9OtHhhK7k=\n-----END PRIVATE KEY-----\n'
    })

    const uploadDone = await writeGoogleSheet({
        title: 'ko',
        doc,
        records: [
            {key: '1', value: '1'},
            {key: '2', value: '2'},
            {key: '3', value: '3'},
            {key: '4', value: '4'},
            {key: '5', value: '5'},
        ]
    })

    if (uploadDone) {
        console.log('쓰기 테스트 성공')
    }
}

main();
