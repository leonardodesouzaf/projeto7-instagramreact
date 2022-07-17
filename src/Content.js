import Principal from "./Principal";
import Sidebar from "./Sidebar";

export default function Content(){
    return(
        <div className="corpo">
            <Principal/>
            <Sidebar/>
        </div>
    )
}