import React from "react"

const Expand = ({children,title}) => {

  const [visible,setVisible] = React.useState(false);

  return (
    <div>
      <div onClick={()=>setVisible(!visible)}>
        <b>{title}</b>
      </div>
      {visible ? <div>
        {children}
      </div> : null}
    </div>
  )
}

export default Expand;