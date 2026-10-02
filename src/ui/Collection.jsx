import { useState } from "react";
import Products from "./Products";

function Collection() {
    const [tabs, setTabs] = useState("All");

    return (
        <div className='bg-main-bg h-auto min-h-[80vh] w-[80vw] flex-row text-center justify-center rounded-xl py-10 px-4 space-y-3'>
            <h1 className="font-semibold text-stone-50 text-2xl">Our Collection</h1>
            <p className="text-slate-200 text-xs px-4 text-balance max-w-md mx-auto leading-relaxed font-semibold">Introducing our Coffee Collection, a selection of unique coffees
                from different roast types and origins, expertly roasted in small batches and shipped freshly weekly.</p>

            <div className="flex gap-5 w-fit mx-auto min-w-[50px] font-semibold text-sm">
                <div className={`tabs ${tabs === "All" ? "bg-tab-hover" : ""}`} onClick={() => setTabs("All")}>All Products</div>
                <div className={`tabs ${tabs === "Available" ? "bg-tab-hover" : ""}`} onClick={() => setTabs("Available")}>Available Now</div>
            </div>

            <div>
                <Products tab={tabs} />
            </div>
        </div>
    );
}

export default Collection;