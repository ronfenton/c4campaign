import React from "react"
import { isTemplateTail } from "typescript"
import "./Info.css"

interface exampleData {
  title: string
  steps: string[]
}

// Title is used by ExampleContainer for generating headings/tabs
const InfoBox = ({
  children,
  stepped,
  category
}: {
  children: any,
  title: string,
  stepped?: boolean,
  category: "info" | "gmnote" | "example"
}) => {
  const [step, setStep] = React.useState(0)

  if (stepped) {
    const steps = [...children]
  
    const onClick = () => {
      if (step >= steps.length) {
        return
      }
      setStep(step + 1)
    }
    return (
      <div className={category}>
        {steps.map((item: any, index: number) => {
          if (index > step) return null
          return (
            <div key={index}>
              {item}
              {index === step && step < steps.length - 1 === true ? (
                <button className="btn" onClick={onClick}>Next</button>
              ) : null}
            </div>
          )
        })}
      </div>
    )
  } else {
    return <div className={category}>{children}</div>
  }
}

const childrenToCategories = (children:any) => {
  console.log("Ran childrenToCategories");
  const categories = ["info","gmnote","example"];

  if(children.length !== undefined) {
    return children.reduce(
      (acc:any,child:any) => {
        const {title:childTitle} = child.props;
        const childCategory = categories.includes(child.props.category) ? child.props.category : "failed";
        return {
          ...acc,
          [childCategory]: [
            ...acc[childCategory],
            { ...child, key:childCategory+childTitle }
          ]
        }
      }
    , {info:[],gmnote:[],example:[],failed:[]});
  }

  const {title} = children.props;
  const category = categories.includes(children.props.category) ? children.props.category : "failed";
  return {
    info:[],gmnote:[],example:[],failed:[],
    [category]:[{...children,key:category+title}]
  }
  
}

const InfoContainer = ({children}) => {
  const data = childrenToCategories(children);

  return (
    <InfoStateContainer data={data}/>
  )
}


const InfoStateContainer = ({data}) => {
  const [contIndex,setContIndex] = React.useState(-1);
  const [contType,setContType] = React.useState(undefined);

  const setContTab = (type:string) => {
    setContIndex(-1);
    setContType(type);
  }

  const renderTabs = () => {
    return (
      <span style={{fontSize:"1.5rem"}}>
        {data.example.length !== 0 ? <i className="bi-play"  onClick={() => setContTab("example")}></i> : null}
        {data.gmnote.length !== 0 ? <i className="bi-chat" onClick={() => setContTab("gmnote")}></i> : null}
        {data.info.length !== 0 ? <i className="bi-info" onClick={() => setContTab("info")}></i> : null}
        {contType !== undefined ? <i className="bi-x"  onClick={() => setContTab(undefined)}></i> : null}
        </span>
    )
  }

  const renderOptions = () => {
    if(contType !== undefined) {
      return (
        <>
          {data[contType].map((item:any, index:number) => <button className="btn btn-secondary"  key={item.props.title} onClick={() => setContIndex(index)}>{item.props.title}</button>)}
        </>
      )
    }
  }

  const renderCurrentContent = () => {
    if(contType !== undefined && contIndex !== -1){
      return data[contType][contIndex];
    }
    return null;
  }

  return (
    <div>
      <div>
        {renderTabs()}
      </div>
      <div>
        {renderOptions()}
      </div>
      <div>
        {renderCurrentContent()}
      </div>
    </div>
  )
}

export { InfoBox, InfoContainer }

/*

<ExampleContainer>
  <Example name=string>
  </Example>
  <Example name=string>
  </Example>
</ExampleContainer>



*/
