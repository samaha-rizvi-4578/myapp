import React from "react";

const UpdatedComp = OrignalComp =>{
    class NewComp extends React.Component{
        render(){
            return <OrignalComp name="USER"/>;
        }
    }
    return NewComp;
}
export default UpdatedComp;