const StartCards = () => {
    const data =[
        { number: '100 +', 
          label: 'Oradores comprometidos', 
        },
        { number: '25 +', 
          label: 'Iglesias Vinculadas',
        },
        { number: '500K +', 
          label:'En cobertura'
        },
    ]
  return (
    <div className="stat--cards--container">
        {
            data.map((item,index) =>
            <div key={index} className='card--start'>   
                <h2 className="h2--stat">{item.number}</h2>
                <p className="p--stat">{item.label}</p>
            </div>)
        }

    </div>
  )
}
export default StartCards