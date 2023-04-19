import { ReactNode } from "react"

interface Props {
    children: ReactNode
}
const Alert = ({children}:Props) => {
  return (

    <div className="alert alert-primary">{children}</div>
  )
}

export default Alert

/** how to use html content as child for component
 * 
 * interface Props { text: string }
 * const Alert = ({text}:Props) => { return ( <div className="alert alert-primary">{text}</div> ) 
 * <Alert text="hello" />
 * 
 * in this case, what if "hello" gets too long? 
 * if you want to use html content you can do it like this 
 * 
 * interface Props { children: ReactNode }
 */