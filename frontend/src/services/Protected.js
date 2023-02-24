import { Navigate } from "react-router-dom";


const Protected = ({ isRole,children }) => {
   if(isRole){
    return children
   }
    else{
        return <Navigate to="/wrong" />
        }

}
    export default Protected;