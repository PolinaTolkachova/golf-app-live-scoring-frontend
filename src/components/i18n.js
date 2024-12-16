import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   resources: {
     en: {
       translation: {
         loading: "Loading...",
         selectPlayers: "Add Selected Players",
         addPlayers: "Add Players",
         tournamentDetails: "Tournament Details",
         location: "Location",
         startDate: "Start Date",
         finishDate: "Finish Date",
         scoringType: "Scoring Type",
         format: "Format",
         noPlayersAdded: "No players added to this tournament yet.",
         playersInTournament: "Players",
       }
     },
     ru: {
       translation: {
         loading: "Загрузка...",
         selectPlayers: "Добавить выбранных игроков",
         addPlayers: "Добавить игроков",
         tournamentDetails: "Детали турнира",
         location: "Место",
         startDate: "Дата начала",
         finishDate: "Дата окончания",
         scoringType: "Тип подсчета",
         format: "Формат",
         noPlayersAdded: "Игроки еще не добавлены в этот турнир.",
         playersInTournament: "Игроки",
       }
     }
   },
   fallbackLng: "en",
   interpolation: {
     escapeValue: false // react already safes from xss
   }
 });

export default i18n;