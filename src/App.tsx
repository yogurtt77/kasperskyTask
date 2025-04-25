import React from 'react';
import NewsComponent from './components/NewsComponent';
import { IData_SnippetNews } from './types/news.types';
import './App.css';

const App: React.FC = () => {
  // Sample news data based on the screenshot
  const mockNewsData: IData_SnippetNews = {
    ID: 1,
    TI: "Antivirus leggero: i migliori e più efficaci (free e a pagamento) 2024",
    AB: "Leading innovator in autonomous driving technology...",
    URL: "https://punto-info.it",
    DOM: "Punto-info.it",
    DP: "2024-06-18",
    LANG: "en",
    REACH: 211000,
    KW: [
      { value: "AutoPilot 5000", count: 5 },
      { value: "InnovTech", count: 5 },
      { value: "autonomous driving", count: 5 },
      { value: "key word", count: 1 },
    ],
    AU: ["Emily C.", "Taormina A.", "et al."],
    CNTR: "Austria",
    CNTR_CODE: "AT",
    SENT: "Positive",
    TRAFFIC: [
      { value: "Austria", count: 38 },
      { value: "USA", count: 12 },
      { value: "Italian", count: 8 },
    ],
    FAV: "",
    HIGHLIGHTS: [
      "...leading innovator in InnovTech in autonomous driving technology... This next-generation autonomous driving solution promises to revolutionize the way...",
      "The AutoPilot 5000 utilizes advanced artificial intelligence and machine learning...",
      "InnovTech believes the AutoPilot 5000 represents a significant leap... Early testing has shown remarkable results, with the AutoPilot 5000 demonstr..."
    ],
  };

  return (
    <div className="app-container">
      <h1>News Component Demo</h1>
      <NewsComponent news={mockNewsData} />
    </div>
  );
};

export default App; 