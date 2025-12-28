import Menu from "./Menu"

export default function Header({data}){
    // console.log(data[0].Title)
    return(
        <>
            <Menu data={data} />
        </>
    )
}