import './App.css'
import {useTranslation, Trans} from "react-i18next";
import {FC} from "react";
import {useNavigate, useParams} from "react-router-dom";

const useTransationFromPath = () => {
    const { t } = useTranslation()
    const { language } = useParams<{ language: string }>()

    return (text: string) => t(text, {lng: language})
}

function App() {
    const navigate = useNavigate()
    const t = useTransationFromPath()
    const {i18n} = useTranslation()

    return (
        <div>
            <div>
                <button onClick={async () => {
                    await i18n.changeLanguage('ko');
                    navigate('/ko');
                }}>한국어
                </button>
                <button onClick={async () => {
                    await i18n.changeLanguage('en');
                    navigate('/en');
                }}>영어
                </button>
                <button onClick={async () => {
                    await i18n.changeLanguage('ja');
                    navigate('/ja');
                }}>일본어
                </button>
                <button onClick={async () => {
                    await i18n.changeLanguage('zh');
                    navigate('/zh');
                }}>중국어
                </button>
            </div>
            {/*i18n:write가 t함수와 Trans를 찾아낸다. 근데 Trans는 lng를 못바꾼다.*/}
            <>{t('환영합니다')}</>
            <Trans key="test" />
        </div>
    )
}
export default App