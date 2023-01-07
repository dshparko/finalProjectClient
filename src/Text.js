export default function Text({props}){
    const pr = props;
    return(<div dangerouslySetInnerHTML={{ __html:  pr }} />)
}