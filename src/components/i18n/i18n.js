import React from 'react'
import { useTranslation } from 'react-i18next'
 

const I18n = () => {
  const { i18n } = useTranslation()

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language)
  }

  const selectedLanguage = i18n.language
  return (
    <div className="flags-container">
      {/* <Flag
        image={BrasilFlag}
        isSelected={selectedLanguage === 'pt-BR'}
        onClick={() => handleChangeLanguage('pt-BR')}
      /> */}
      <button
      isSelected={selectedLanguage === 'pt-BR'}
       onClick={() => handleChangeLanguage('pt-BR')}>
        brasil
      </button>
      <button
      isSelected={selectedLanguage === 'en-US'}
       onClick={() => handleChangeLanguage('en-US')}>
        USA
      </button>
    </div>
  )
}

export default I18n