export default {
    input: [
        '../src/**/*.{ts,tsx}', // typescript 코드에서 번역 키를 검색
    ],
    output: 'public/locales/$LOCALE/$NAMESPACE.json',
    defaultNamespace: 'translation',
    locales: ['ko', 'en', 'ja', 'zh'],
};
