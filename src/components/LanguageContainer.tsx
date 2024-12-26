import LanguageChip from "./LanguageChip";
import { languages } from "../utils/languages";

interface LanguageContainerProps {
    wrongGuesses: number;
    isGameLost: boolean;
}

export default function LanguageContainer({ wrongGuesses, isGameLost }: LanguageContainerProps) {

    const languageList = languages.map((language, index) => {
        if(isGameLost) {
            wrongGuesses = languages.length - 1;
        }
        const isLost = index < wrongGuesses;
        return <LanguageChip
            key={language.name}
            name={language.name}
            bgColor={language.backgroundColor}
            color={language.color}
            lost={isLost}
        />
    });

    return (
        <section className="language-container">
            {languageList}
        </section>
    );
}