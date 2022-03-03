import { useEffect, useState } from 'react';
import './App.css';
import icon from './assets/icon.jpg'
import { Skeleton } from './component/Skeleton';

const data = [
  {
    id: 1,
    title: "Lorem, ipsum.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing."
  },
  {
    id: 2,
    title: "Lorem, ipsum.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing."
  },
  {
    id: 3,
    title: "Lorem, ipsum.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing."
  },
  {
    id: 4,
    title: "Lorem, ipsum.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing."
  },
  {
    id: 5,
    title: "Lorem, ipsum.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing."
  },
  {
    id: 6,
    title: "Lorem, ipsum.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing."
  },
  {
    id: 7,
    title: "Lorem, ipsum.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing."
  },
]


type ICard = {
  id: number,
  title: string,
  description: string,
}

function App() {
  const [cardData, setCardData] = useState<ICard[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardData(data);

      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [])

  return (
    <div className='container'>
      <h1>Skeleton Loading</h1>
      <div className="grid">

        {loading && 
          <>
            <Skeleton Qtd={7}/>
          </>
        }

        {!loading &&
          <>

            {
              cardData.map(card => (

              <div key={card.id} className="card">
                <div className="header-content">
                  <img className="header-image" src={icon} alt="Pain Icons" />
                  <strong>{card.title}</strong>
                </div>
                
                <p>{card.description}</p>
              </div>

              ))
            }

          </>
        }
        

      </div>
    </div>
  );
}

export default App;
