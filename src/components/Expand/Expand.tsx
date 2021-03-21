import React from "react"
import "./Expand.css"

const Expand = ({children,title}) => {

  const [visible,setVisible] = React.useState(false);

  return (
    <div>
      <div onClick={()=>setVisible(!visible)}>
        <b style={{cursor:"context-menu"}}>
          {visible ? "[Close x] " : "[Expand >] "}
          {title}
        </b>
      </div>
      {visible ? <div>
        <hr/>
        {children}
      </div> : null}
    </div>
  )
}

export default Expand;