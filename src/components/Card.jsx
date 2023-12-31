import backcard from '../assets/Verse-Card.png'


function Card({card,handleChoice,flibed,disabled}) {
    const handleClick = () => { 
      if (!disabled) {
      handleChoice(card)
      }
     }

    return (
      <div className='card' key={card.id}>
        <div className={flibed?'flibed':""}>
            <div  className='text-center me-10 hover:rotate-6 cursor-pointer active:scale-110' >
            <img src={card.src} alt='front card' className="w-40 mb-5 front" />
            <img src={backcard} alt="back card" className='w-40 back' onClick={handleClick}/>
            </div>
        </div>
      </div>
    );
}

export default Card