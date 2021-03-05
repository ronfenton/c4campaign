import React from "react"
import { isTemplateTail } from "typescript"

interface exampleData {
  title: string
  steps: string[]
}

// Title is used by ExampleContainer for generating headings/tabs
const InfoBox = ({
  children,
  stepped,
}: {
  children: any,
  title: string,
  stepped?: boolean,
  category: "info" | "gmnote" | "example"
}) => {
  const [step, setStep] = React.useState(0)
  const steps = [...children]

  const onClick = () => {
    if (step >= steps.length) {
      return
    }
    setStep(step + 1)
  }

  if (stepped) {
    return (
      <div style={{ backgroundColor: "#ffcccc" }}>
        {steps.map((item: any, index: number) => {
          if (index > step) return null
          return (
            <div key={index}>
              {item}
              {index === step && step < steps.length - 1 === true ? (
                <button onClick={onClick}>Next</button>
              ) : null}
            </div>
          )
        })}
      </div>
    )
  } else {
    return <div>{children}</div>
  }
}

const childrenToCategories = (children: any) => {
  const validCategories = ["info","gmnote","example"]
  const defaultReturn = {info:[],gmnote:[],example:[],failed:[]}

  if(children.length !== undefined) {

    const childArr = [...children];
    const categories = childArr.reduce(
      (acc:any,item:any) => {
        const {category} = item.props;
        if(validCategories.includes(category)){
          return {
            ...acc,
            [category]: [
              ...acc[category],
              item
            ]
          }
        }
        return {
          ...acc,
          failed: [
            ...acc.failed,
            item
          ]
        }
      },
      {
        ...defaultReturn
      }
    )
    return categories;
  }
  if(validCategories.includes(children.props.category)){
    return { ...defaultReturn, [children.props.category]:[children]}
  }
  return {...defaultReturn, failed:[children]}
}

const InfoContainer = ({children}) => {
  const data = childrenToCategories(children);
  console.log(`${data.info.length} Info Articles, ${data.gmnote.length} GM Articles, ${data.example.length} Example Articles`);
  const icons = { info: "i", gmnote: "G", example: ">>"};

  const [contIndex,setContIndex] = React.useState(-1);
  const [contType,setContType] = React.useState(undefined);

  const setContTab = (type) => {
    setContIndex(-1);
    setContType(type);
  }

  const renderTabs = () => {
    return (
      <>
        {data.info.length !== 0 ? <button onClick={() => setContTab("info")}>{icons.info}</button> : null}
        {data.gmnote.length !== 0 ? <button onClick={() => setContTab("gmnote")}>{icons.gmnote}</button> : null}
        {data.example.length !== 0 ? <button onClick={() => setContTab("example")}>{icons.example}</button> : null}
        <button onClick={() => setContTab(undefined)}>Close</button>
      </>
    )
  }

  const renderOptions = () => {
    if(contType !== undefined) {
      return (
        <>
          {data[contType].map((item:any, index:number) => <button onClick={() => setContIndex(index)}>{item.props.title}</button>)}
        </>
      )
    }
  }

  const renderCurrentContent = () => {
    if(contType !== undefined && contIndex !== -1){
      return {
        ...data[contType][contIndex],
        key: data[contType][contIndex].title
      }
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
