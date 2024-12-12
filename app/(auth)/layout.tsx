import { ReactNode } from "react";

export default function({children}:Readonly<{children:React.ReactNode}>){
    return <div>
       <div className="p-1 border-b text-center">
         30% off for next few days
        </div>
       {children}
    </div>
    
}