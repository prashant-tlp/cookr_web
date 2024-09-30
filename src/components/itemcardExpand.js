import React from 'react'
import { useNavigate } from 'react-router-dom'

const ItemCardExp = () => {
    const navigate=useNavigate();
  return (
    <>
    <div>
    <body className="bg-gray-100">
    <div className="container mx-auto p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">

            <h1 className="text-2xl font-bold mb-4 ">
                Delicious Chocolate Cake
            </h1>
            
            <div className="bg-slate-700 w-3/6 h-3/6"><img className="mx-auto my-4 rounded-lg shadow" src="https://images.unsplash.com/photo-1616031037011-087000171abe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8Q2hvY29sYXRlJTIwQ2FrZXxlbnwwfDB8fHwxNjk0MTc2ODk0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Chocolate Cake" /></div>

            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside mb-4">
                <li className="mb-2">2 cups all-purpose flour</li>
                <li className="mb-2">1 3/4 cups granulated sugar</li>
                <li className="mb-2">3/4 cup unsweetened cocoa powder</li>
                <li className="mb-2">1 1/2 tsp baking powder</li>
                <li className="mb-2">1 1/2 tsp baking soda</li>
                
            </ul>

            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside mb-6">
                <li className="mb-2">Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.</li>
                <li className="mb-2">In a large bowl, sift together the flour, cocoa powder, baking powder, and baking soda.
                </li>
                <li className="mb-2">In another bowl, whisk together the sugar and eggs until well combined.</li>
                <li className="mb-2">Add the wet ingredients to the dry ingredients and mix until smooth.</li>
                <li className="mb-2">Divide the batter evenly between the prepared pans.</li>
                
            </ol>

            <p className="text-gray-700 mb-4">Serve the cake with your favorite frosting or enjoy it plain!</p>

            <div className="text-center">
                <button className="bg-black text-white m-2 px-4 py-2 rounded-lg hover:bg-gray-800" onClick={()=>{window.print()}}> Print Recipe</button>
                <button className="bg-black text-white m-2 px-4 py-2 rounded-lg hover:bg-gray-800" onClick={()=>{navigate('/')}}>Home</button>
            </div>
        </div>
    </div>
</body>
    </div>
    </>
  )
}

export default ItemCardExp