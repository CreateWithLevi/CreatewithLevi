import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/languageSwitcher.scss"
import { classNames } from "../util/lang"

const LanguageSwitcher: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "language-switcher")}>
      <button id="language-button">
        <div class="current-language-zh">中</div>
        <div class="current-language-en">EN</div>
      </button>
    </div>
  )
}

LanguageSwitcher.css = style

LanguageSwitcher.afterDOMLoaded = `
  const languageButton = document.getElementById('language-button')
  
  function toggleLanguage() {
    const currentPath = window.location.pathname
    const isEnglish = currentPath.includes('/en/')
    const newPath = isEnglish 
      ? currentPath.replace('/en/', '/zh/') 
      : currentPath.replace('/zh/', '/en/')
    
    window.location.href = newPath
  }

  if (languageButton) {
    languageButton.addEventListener('click', toggleLanguage)
  }
`

export default (() => LanguageSwitcher) satisfies QuartzComponentConstructor