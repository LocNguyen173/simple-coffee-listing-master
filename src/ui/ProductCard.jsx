import starFill from "../assets/coffees/Star_fill.svg"
import star from "../assets/coffees/Star.svg"

export default function ProductCard({ product }) {
    return (
        <div className="p-4 max-w-xs mx-auto w-full flex flex-col items-center space-y-3">
            <div className="relative w-full">
                {product.popular && <span className="absolute px-2 py-1 bg-yellow-200 rounded-lg text-slate-900 text-sm font-semibold z-10 top-2 left-2">Popular</span>}
                <img src={product.image} alt={product.name} className="rounded-lg w-full object-c`over mx-auto" />
            </div>
            <div className="flex items-center justify-between w-full">
                <h3 className="font-bold">{product.name}</h3>
                <p className="bg-green-200 rounded-md px-2 py-1 font-bold text-slate-700">{product.price}</p>
            </div>
            <p className="flex items-center justify-between gap-1 w-full">
                {product.rating ? (
                    <div className="flex items-center gap-1">
                        <img src={starFill} alt="star fill" className="w-6 h-6" />
                        <span className="font-semibold">{product.rating}</span>
                        <span>({product.votes} votes)</span>
                    </div>
                ) : (
                    <div className="flex items-center gap-1">
                        <img src={star} alt="star outline" className="w-6 h-6" />
                        <span>No rating</span>
                    </div>
                )}

                {!product.available && <span className="text-red-400 font-semibold">Sold out</span>}
            </p>
        </div>
    );


}