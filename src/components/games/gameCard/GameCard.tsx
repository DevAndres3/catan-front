import img from '../../../assets/catan.jpg'


export const GameCard = () => {
    return (
        <div className="min-w-2xs max-w-2xs h-[400px] rounded-lg overflow-hidden shadow-lg">
        <div className="relative w-full h-[200px]">
          <img 
            src={img} 
            alt="bg-img" 
            className="absolute inset-0 w-full h-full object-cover"
          />          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        </div>
        
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">Catan</h3>
          <button className="bg-blue-500 dark:bg-gray-900" type='button'>
            Ver más
          </button>
         
        </div>
      </div>
    )
}
