import React from 'react'
import './App.css'
import Main from './components/Main/index.jsx';
import wok1 from './imeges/wok-1.jpg'
import wok2 from './imeges/wok-2.jpg'
import wok3 from './imeges/wok-3.jpg'
import wok4 from './imeges/wok-4.jpeg'

function App() {
  const data = [
    {
      img: wok1,
      title: "унаги урамаки",
      text: "угорь, авокадо, сливочный сыр, огурец, соус унаги, кунжут",
      count: "1900,00 ТГ",
      pieces: "8 штук",
      button: "Калорийность Ккал 298",
      minus: "-",
      input: "1",
      plus: "+",
      add: "Добавить корзину",
    },
    {
      img: wok2,
      title: "мадрид ролл",
      text: "Ласось, авокадо, спайси соус, перец чили, икра тобико.",
      count: "1100,00 ТГ",
      pieces: "8 штук",
      button: "Калорийность Ккал 275",
      minus: "-",
      input: "1",
      plus: "+",
      add: "Добавить корзину",
    },
    {
      img: wok3,
      title: "теплая креветка с моцареплой",
      text: "Теплый ролл-Креветка, тамаго, огурец, сливочный сыр, икра тобико, моцарелла.",
      count: "1700,00 ТГ",
      pieces: "8 штук",
      button: "Калорийность Ккал 257",
      minus: "-",
      input: "1",
      plus: "+",
      add: "Добавить корзину",
    },
    {
      img: wok4,
      title: "фреш ролл с баклажаном",
      text: "Рисовая Бумага, лист салата, баклажан в чесносном соусе, помидор.",
      count: "550,00 ТГ",
      pieces: "8 штук",
      button: "Калорийность Ккал 235",
      minus: "-",
      input: "1",
      plus: "+",
      add: "Добавить корзину",
    },
  ];
  return (
    <div className="Card">
      {data.map((im) => {
        return <Main data={im} />;
      })}
    </div>
  );
}

export default App;
